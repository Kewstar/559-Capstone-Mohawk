// types.ts 
export type BookMode = 'newCharacter' | 'loadCharacter' | 'userProfile'; 

export type PageProps = {
    children: React.ReactNode;
    className?: string;
};