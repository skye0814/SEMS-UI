import React, { ReactNode, useEffect, useState } from 'react';
import { getCurrentUser, logout } from '../services/authService';
import LoginPage from '../layout/LoginPage';
import { User } from '../models/User';
import { AxiosResponse } from 'axios';

interface Props {
    children: JSX.Element
}

export default function RequireAuth({ children }: Props): JSX.Element{
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        async function getUserAsync() {
            const response: AxiosResponse | null = await getCurrentUser();
            const token = localStorage.getItem('ep-token');
            
            if (response?.status === undefined || response?.status === 200) {
                if (!response){
                    setIsAuthenticated(false);
                    logout();
                }

                setIsAuthenticated(true);
            }
            else if (!token) {
                setIsAuthenticated(false);
                logout();
            }
            else {
                setIsAuthenticated(false);
                logout();
            }
        }
    
        getUserAsync();
      }, []);
    
      return isAuthenticated ? children : <LoginPage />;
};
