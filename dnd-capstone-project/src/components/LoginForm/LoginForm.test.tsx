// JSX Imports 
import LoginForm from "./LoginForm";

// Testing Imports 
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";


// vi.mock('react-router-dom', () => ({
//     useNavigate: () => vi.fn(),
// }));

// class ResizeObserverMock {
//     observe = vi.fn();
//     unobserve = vi.fn();
//     disconnect = vi.fn();
// }

// vi.stubGlobal('ResizeObserver', ResizeObserverMock);


describe("LoginForm", () => {
    
    it("grab username/email field + password field", () => {
        render(<LoginForm />);

        expect(screen.getByLabelText('Username / Email')).toBeInTheDocument();        
    });
});