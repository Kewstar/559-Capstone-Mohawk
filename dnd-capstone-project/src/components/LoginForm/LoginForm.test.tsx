// LoginForm.test.tsx
// JSX Imports 
import LoginForm from "./LoginForm";

// Testing Imports 
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

// Mock fetch globally
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);


//#region —— Helper functions —— 
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
//#endregion —— Helper functions —— 



describe("LoginForm Test Cases", () => {

    //#region —— SIGN IN TESTS ——
    describe("SIGN IN Test Cases", () => {
        test("Determine if username/email & password input fields exist", () => {
            render(<LoginForm />);
    
            expect(screen.getByLabelText('Username / Email')).toBeInTheDocument();        
            expect(screen.getByLabelText('Password')).toBeInTheDocument();        
        });
    });
    //#endregion —— SIGN IN TESTS ——


    //#region —— SIGN UP TESTS ——
    describe("SIGN UP Test Cases", () => {
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
            mockFetch.mockResolvedValueOnce({
                json: async () => ({ message: "Signup Success!" }),
                ok: true,
                status: 200,
            });

            render(<LoginForm />);

            await navigateToSignUp();

            await fillSignUpForm({
                username:   'TestUser123',
                email:      'testuser@example.com',
                password:   'Password1!',
                role:       'dm',
            });

            await submitSignUpForm();

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
            
            await fillSignUpForm({
                username:           'TestUser123',
                email:              'testuser@example.com',
                password:           'Password1!',
                confirmPassword:    'WrongPassword1!!',
                role:               'dm',
            });

            await submitSignUpForm();

            // fetch should never be called — validation blocks the submit
            expect(mockFetch).not.toHaveBeenCalled();
        });

        test("Does NOT submit if fields are empty", async () => {
            render(<LoginForm />);

            await navigateToSignUp();
            await submitSignUpForm();

            expect(mockFetch).not.toHaveBeenCalled();
        });
    });
    //#endregion —— SIGN UP TESTS ——

});