import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // Simulação de autenticação
};

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
