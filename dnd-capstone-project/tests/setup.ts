// setup.ts
// import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

export const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

// hides console message in test terminal
window.scrollTo = vi.fn();

beforeAll(() => {
    class ResizeObserverMock {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
    }

    vi.stubGlobal('ResizeObserver', ResizeObserverMock);

});

afterEach(() => {
    cleanup();
    vi.clearAllMocks();
});