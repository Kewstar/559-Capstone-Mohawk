import supabase from "./frontend-supabase";


export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';


/**
 * Calls the backend with the signed-in user's access token attached, 
 * this allows protected routes to verify who is making the request. 
 * 
 * @param path The backend route, starts with a slash. 
 * @param init Optional. Fetch options, like `method`, `body`, or `signal`. 
 * 
 * @returns The Promise<Response> from `fetch`. 
 */
export async function authFetch(path: string, init: RequestInit = {}) {
    const { data: { session } } = await supabase.auth.getSession();

    return fetch(`${API_URL}${path}`, {
        ...init, 
        headers: {
            'Content-Type': 'applications/json',
            ...init.headers,
            Authorization: `Bearer ${session?.access_token ?? ''}`,
        },
    });
}