// src/app/admin/authProvider.ts
import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('auth', JSON.stringify({ username }));
            return Promise.resolve();
        }
        return Promise.reject(new Error('Invalid username or password'));
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
    getIdentity: () => {
        try {
            const { username } = JSON.parse(localStorage.getItem('auth')!);
            return Promise.resolve({ id: username, fullName: username });
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

export default authProvider;
