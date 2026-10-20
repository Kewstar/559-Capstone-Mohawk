// App.tsx
// —— React Component Imports —— //
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// —— Page Imports —— // 
import '@/App.css'
import LoginForm from '@/components/LoginForm/LoginForm'
import BookContainer from '@/components/BookContainer/BookContainer'
import { SignedInRoute, SignedOutRoute } from '@/hooks/RouteSessionLocks';
import { UserDataProvider } from './context/UserDataContext';


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>

                <Routes>
                    <Route element={<SignedOutRoute />}>
                        <Route path='/' element={<LoginForm />} />
                    </Route>

                    <Route element={<SignedInRoute />}>
                        <Route path='/home' element={
                                <UserDataProvider>
                                    <BookContainer />
                                </UserDataProvider>
                            }
                        /> 
                    </Route>
                </Routes>

            </BrowserRouter>
        </AuthProvider>
    )
};

export default App;