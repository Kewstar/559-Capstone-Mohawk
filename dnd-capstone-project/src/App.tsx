// App.tsx
// —— React Component Imports —— //
import { useEffect } from 'react'
import supabase from './frontend-supabase'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// —— Page Imports —— // 
import '@/App.css'
import LoginForm from '@/components/LoginForm/LoginForm'
import BookContainer from '@/components/BookContainer/BookContainer'

function App() {
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                console.log("User Sign In Success!", session);
            }
            
            else if (event === 'SIGNED_OUT') {
                console.log("User Signed Out!");
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/home' element={<BookContainer />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App