import React, { createContext, useContext, useState } from 'react';

//we created a custom hook called useUser
type UserContextType={
    userInfo:{username:string;password:string};
    setUserInfo:
    React.Dispatch<React.SetStateAction<{username:string;password:string}>>;
}
const UserContext = createContext<UserContextType|undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [userInfo, setUserInfo] = useState({
        username: 'admin',
        password: 'admin@123',
    });

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
