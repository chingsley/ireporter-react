export const saveToken = token => window.localStorage.setItem('userToken', token);
export const getToken = () => window.localStorage.getItem('userToken') || '';
export const removeToken = () => window.localStorage.removeItem('userToken');
