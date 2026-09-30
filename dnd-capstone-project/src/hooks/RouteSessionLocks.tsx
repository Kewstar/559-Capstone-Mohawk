// RouteSessionLocks.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export function SignedInRoute() {
    const { supaSession, loadingSessionFlag } = useAuth();

    if (loadingSessionFlag) {
        return <div>Loading Website!</div>
    }

    return supaSession ? <Outlet /> : <Navigate to={'/'} replace />
};


export function SignedOutRoute() {
    const { supaSession, loadingSessionFlag } = useAuth();

    if (loadingSessionFlag) {
        return <div>Loading Website!</div>
    }

    return supaSession ? <Navigate to={'/home'} replace /> : <Outlet />
};