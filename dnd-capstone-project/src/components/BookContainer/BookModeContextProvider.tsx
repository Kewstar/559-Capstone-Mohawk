// BookModeContextProvider.tsx
import type { ReactNode } from 'react';    
import type { BookMode } from "./types";
import { NewCharacterProvider } from "./Pages/NewCharacterPages/useNewCharacterData";


type BookModeContextProviderProps = {
    /** String that serves as a unique key which determines the pages and tabs to render */
    bookMode: BookMode;
    /** The `HTMLFlipBook` and the Pages rendered inside it, that require the context for the current `bookMode`.  */
    children: ReactNode;
};

/**
 * Determines which context provider the `HTMLFlipBook` is granted, matching the current `bookMode`. 
 * This allows every Page within a set to share the same state data. 
 */
export function BookModeContextProvider({ bookMode, children }: BookModeContextProviderProps) {
    switch (bookMode) {
        case "newCharacter":
            return <NewCharacterProvider>{children}</NewCharacterProvider>
    
        default:
            return <>{children}</>
    }
};