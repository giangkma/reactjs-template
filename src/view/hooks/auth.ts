import container from 'src/container';

const {
    cradle: { authService },
} = container;

// hook check if user logged in
export const useAuthenticated = (): boolean => {
    const token = authService.getToken();
    return !!token;
};
