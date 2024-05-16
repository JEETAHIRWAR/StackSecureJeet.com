export const signUpUser = (userData) => ({ type: 'LOGIN_USER', payload: userData });
export const logoutUser = () => ({ type: 'LOGOUT_USER' });