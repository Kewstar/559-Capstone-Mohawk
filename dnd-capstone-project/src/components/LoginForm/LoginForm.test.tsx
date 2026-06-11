// JSX Imports 
import LoginForm from "./LoginForm";

// Testing Imports 
// import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'


// vi.mock('react-router-dom', () => ({
//     useNavigate: () => vi.fn(),
// }));

// class ResizeObserverMock {
//     observe = vi.fn();
//     unobserve = vi.fn();
//     disconnect = vi.fn();
// }

// vi.stubGlobal('ResizeObserver', ResizeObserverMock);


describe("LoginForm Test Cases", () => {

    describe("SIGN IN Test Cases", () => {
        test("Determine if username/email & password input fields exist", () => {
            render(<LoginForm />);
    
            expect(screen.getByLabelText('Username / Email')).toBeInTheDocument();        
            expect(screen.getByLabelText('Password')).toBeInTheDocument();        
        });
    });

    describe("SIGN UP Test Cases", () => {
        test("Determine the ability to change tab to SIGN UP, then determine if Username, Email, Password, Confirm Password, & Role select input fields exist", async () => {
            render(<LoginForm />);
            
            await userEvent.click(
                screen.getByRole('tab', {
                    name: 'Sign Up'
                }), 
            );
            
            expect(screen.getByLabelText('Username')).toBeInTheDocument();        
            expect(screen.getByLabelText('Email')).toBeInTheDocument();        
            expect(screen.getByLabelText('Password')).toBeInTheDocument();        
            expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
            expect(screen.getByLabelText('I am a...')).toBeInTheDocument();
        });
    });

});