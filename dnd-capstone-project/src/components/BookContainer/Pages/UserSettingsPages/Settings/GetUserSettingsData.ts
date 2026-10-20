// // useGetUserData.ts 
// import { useEffect, useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import type { UserData } from "@/components/BookContainer/types";


// export function getUserSettingsData() {
//     const [data, setData] = useState<UserData | null>(null);
//     const [error, setError] = useState<string | null>(null);
    
//     const { user } = useAuth();
 
//     useEffect(() => {
//         if (!user?.id) 
//             return;

//         const controller = new AbortController(); 
    
//         async function getUserData() {
//             try {
//                 const res = await fetch('/getUserData', { signal: controller.signal });
                
//                 if (!res.ok) {
//                     throw new Error('ERROR: Could Not Load User Data.');
//                 }
                
//                 const userData = await res.json();
//                 setData(userData);
                
//             } catch (error) {
//                 if ( (error as Error).name === 'AbortError' ) 
//                     return;
//                 setError( (error as Error).message );
//             }
//         } 

//         getUserData();

//         return () => controller.abort();
//     }, [user?.id]);
    

//     return { data, error, setData };
// }