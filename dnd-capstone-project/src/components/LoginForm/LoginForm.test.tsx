// LoginForm.test.tsx
// JSX Imports 
import LoginForm from "./LoginForm";
import { mockNavigate } from "../../../tests/setup";

// Testing Imports 
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event'


// Mock Supabase 
const mockSignInWithPassword = vi.fn();
vi.mock('@/frontend-supabase', () => ({
    default: {
        auth: {
            signInWithPassword: (...args: unknown[]) => mockSignInWithPassword(...args),
        },
    },
}));

// Mock fetch globally
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);


//#region —— Helper functions —— 

//#region —— SignInForm Helpers ——
interface SignInFormData {
    usernameOrEmail:    string;
    password:           string;
};
const defaultSignInData: SignInFormData = {
    usernameOrEmail:    'TestUser123',
    password:           'Password1!',
};

async function fillSignInForm(data: Partial<SignInFormData> = {}) {
    const { usernameOrEmail, password } = { ...defaultSignInData, ...data };

    await userEvent.type(screen.getByLabelText('Username / Email'), usernameOrEmail);
    await userEvent.type(screen.getByLabelText('Password'), password);
};

async function submitSignInForm() {
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
};
//#endregion —— SignInForm Helpers ——


//#region —— SignUpForm Helpers ——
interface SignUpFormData {
    username:           string;
    email:              string;
    password:           string;
    confirmPassword:    string;
    role:               'player' | 'dm';
};

const defaultSignUpData: SignUpFormData = {
    username:           'TestUser123',
    email:              'testuser@example.com',
    password:           'Password1!',
    confirmPassword:    'Password1!',
    role:               'player',
};

async function fillSignUpForm(data: Partial<SignUpFormData> = {}) {
    const { username, email, password, confirmPassword, role } = { ...defaultSignUpData, ...data };

    await userEvent.type(screen.getByLabelText('Username'), username);
    await userEvent.type(screen.getByLabelText('Email'), email);
    await userEvent.type(screen.getByLabelText('Password', { selector: '#signup-password' }), password);
    await userEvent.click(screen.getByLabelText('Confirm Password'));
    await userEvent.type(screen.getByLabelText('Confirm Password', { selector: '#signup-password-confirm' }), confirmPassword);
    
    if (role === 'dm') {
        await userEvent.click(screen.getByRole('radio', { name: /dm/i }));
    };
};

async function expectSignUpFetchCalledWith(data: Partial<SignUpFormData> = {}) {
    const { username, email, password, role } = { ...defaultSignUpData, ...data };
    
    await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
            'http://localhost:8000/signup',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password, role }),
            })
        );
    });
};

async function navigateToSignUp() {
    await userEvent.click(screen.getByRole('tab', { name: 'Sign Up' }));
};

async function submitSignUpForm() {
    await userEvent.click(screen.getByRole('button', { name: /sign up/i }));
};
//#endregion —— SignUpForm Helpers ——

//#endregion —— Helper functions —— 



describe("LoginForm.tsx Test Cases", () => {

    describe("SignInForm.tsx Test Cases", () => {
        test("Determine if username/email & password input fields exist", () => {
            render(<LoginForm />);
    
            expect(screen.getByLabelText('Username / Email')).toBeInTheDocument();        
            expect(screen.getByLabelText('Password')).toBeInTheDocument();        
        });


        test("Successfully log in with an email address", async () => {
            // AAA: Arrange, Act, Assert
            // Arrange: Supabase returns a valid session
            mockSignInWithPassword.mockResolvedValueOnce({
                data: { user: { id: 'user-123', email: 'testuser@example.com' }, session: {} },
                error: null,
            });

            render(<LoginForm />);

            // Act: fill with a valid email (skips the /getEmail lookup)
            await fillSignInForm({ usernameOrEmail: 'testuser@example.com' });
            await submitSignInForm();

            // Assert: Supabase was called with the email directly
            await waitFor(() => {
                expect(mockSignInWithPassword).toHaveBeenCalledWith({
                    email: 'testuser@example.com',
                    password: defaultSignInData.password,
                });
            });

            // Assert: navigated away on success
            expect(mockNavigate).toHaveBeenCalledWith('/home');
        });


        test("Successfully log in with a username (fetches email first)", async () => {
            // Arrange: /getEmail resolves the username → email
            mockFetch.mockResolvedValueOnce({
                json: async () => 'testuser@example.com',
                ok: true,
                status: 200,
            });

            // Arrange: Supabase then signs in with that email
            mockSignInWithPassword.mockResolvedValueOnce({
                data: { user: { id: 'user-123', email: 'testuser@example.com' }, session: {} },
                error: null,
            });

            render(<LoginForm />);

            // Act: fill with a username (triggers the /getEmail fetch)
            await fillSignInForm({ usernameOrEmail: 'TestUser123' });
            await submitSignInForm();

            // Assert: /getEmail was called with the correct username
            await waitFor(() => {
                expect(mockFetch).toHaveBeenCalledWith(
                    'http://localhost:8000/getEmail?username=TestUser123',
                    expect.objectContaining({ method: 'GET' })
                );
            });

            // Assert: Supabase used the resolved email
            expect(mockSignInWithPassword).toHaveBeenCalledWith({
                email: 'testuser@example.com',
                password: defaultSignInData.password,
            });

            expect(mockNavigate).toHaveBeenCalledWith('/home');
        });


        test("Does NOT submit if usernameOrEmail and password do not match a registered user", async () => {
            // Arrange: Supabase returns an auth error (wrong credentials)
            mockSignInWithPassword.mockResolvedValueOnce({
                data: { user: null, session: null },
                error: { message: 'Invalid login credentials' },
            });

            render(<LoginForm />);

            await fillSignInForm({ usernameOrEmail: 'testuser@example.com', password: 'WrongPassword!' });
            await submitSignInForm();

            // Assert: Supabase was called but navigation did NOT happen
            await waitFor(() => {
                expect(mockSignInWithPassword).toHaveBeenCalled();
            });
            expect(mockNavigate).not.toHaveBeenCalled();
        });

        test("Does NOT submit if user does not exist", async () => {
            // Arrange: /getEmail returns a 400 (username not found), 
            // signInWithPassword should never be reached
            mockFetch.mockResolvedValueOnce({
                json: async () => ({ message: 'ERROR: User not found' }),
                ok: false,
                status: 400,
            });

            render(<LoginForm />);

            // Use a username so the /getEmail path is exercised
            await fillSignInForm({ usernameOrEmail: 'GhostUser999' });
            await submitSignInForm();

            await waitFor(() => {
                expect(mockFetch).toHaveBeenCalled();
            });
            expect(mockNavigate).not.toHaveBeenCalled();
        });


        test("Does NOT submit if fields are empty", async () => {
            render(<LoginForm />);

            await submitSignInForm();

            // Empty-field guard fires before any network call
            expect(mockFetch).not.toHaveBeenCalled();
            expect(mockSignInWithPassword).not.toHaveBeenCalled();
            expect(mockNavigate).not.toHaveBeenCalled();
        });
    });


    describe("SignUpForm.tsx  Test Cases", () => {
        test("Determine the ability to change tab to SIGN UP, then determine if sll input fields exist", async () => {
            render(<LoginForm />);
            
            await navigateToSignUp();
            
            expect(screen.getByLabelText('Username')).toBeInTheDocument();        
            expect(screen.getByLabelText('Email')).toBeInTheDocument();        
            expect(screen.getByLabelText('Password')).toBeInTheDocument();        
            expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
            expect(screen.getByLabelText('I am a...')).toBeInTheDocument();
        });


        test("Successfully register a new user by filling in all fields and submitting", async () => {
            // AAA: Arrange, Act, Assert
            // Arrange: mock the backend /signup response to simulate Supabase success
            mockFetch.mockResolvedValueOnce({
                json: async () => ({ message: "Signup Success!" }),
                ok: true,
                status: 200,
            });

            render(<LoginForm />);

            await navigateToSignUp();
            
            // Act: fill in all signup fields with valid data
            await fillSignUpForm({
                username:   'TestUser123',
                email:      'testuser@example.com',
                password:   'Password1!',
            }); // Role defaults to "player" 

            await submitSignUpForm();
            
            // Assert: fetch was called with the correct payload
            await expectSignUpFetchCalledWith({
                username:   'TestUser123',
                email:      'testuser@example.com',
                password:   'Password1!',
                role:       'player',
            });
        });


        test("Successfully register a new user with role 'dm'", async () => {
            // Arrange: mock the backend /signup response to simulate Supabase success
            mockFetch.mockResolvedValueOnce({
                json: async () => ({ message: "Signup Success!" }),
                ok: true,
                status: 200,
            });

            render(<LoginForm />);

            await navigateToSignUp();

            // Act: fill all signup fields with valid data, select 'dm' role
            await fillSignUpForm({
                username:   'TestUser123',
                email:      'testuser@example.com',
                password:   'Password1!',
                role:       'dm',
            });

            await submitSignUpForm();

            // Assert: New user should be created, registered with 'dm' role
            await expectSignUpFetchCalledWith({
                username:   'TestUser123',
                email:      'testuser@example.com',
                password:   'Password1!',
                role:       'dm',
            });
        });


        test("Does NOT submit if passwords do not match", async () => {
            render(<LoginForm />);

            await navigateToSignUp();
            
            // Act: type a password and confirmPassword that do not match 
            await fillSignUpForm({
                username:           'TestUser123',
                email:              'testuser@example.com',
                password:           'Password1!',
                confirmPassword:    'WrongPassword1!!',
                role:               'dm',
            });

            await submitSignUpForm();

            // Assert: fetch should never be called, validation blocks the submit
            expect(mockFetch).not.toHaveBeenCalled();
        });


        test("Does NOT submit if any input field has an error state", async () => {
            render(<LoginForm />);

            await navigateToSignUp();

            // Act: Type an invalid username (too short — triggers "error" class)
            await fillSignUpForm({
                username:           'T',
                email:              'testuser@example.com',
                password:           'Password1!',
                confirmPassword:    'WrongPassword1!!',
                role:               'dm',
            });
            await submitSignUpForm();

            // Assert: checkSignupDataHasError sees username as "error", blocks the fetch
            expect(mockFetch).not.toHaveBeenCalled();
        });


        test("Does NOT submit if fields are empty", async () => {
            render(<LoginForm />);

            await navigateToSignUp();
            await submitSignUpForm();

            expect(mockFetch).not.toHaveBeenCalled();
        });
    });

});