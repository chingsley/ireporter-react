export const saveToken = token => window.localStorage.setItem('userToken', token);
export const saveUser = user => window.localStorage.setItem('user', JSON.stringify(user));
export const saveReports = reports => window.localStorage.setItem('reports', JSON.stringify(reports));
export const getToken = () => window.localStorage.getItem('userToken') || '';
export const getCurrentUser = () => JSON.parse(window.localStorage.getItem('user'));
export const getLocalReports = () => JSON.parse(window.localStorage.getItem('reports'));
export const clearLocalStorage = () => {
  window.localStorage.removeItem('userToken');
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('reports');
};
