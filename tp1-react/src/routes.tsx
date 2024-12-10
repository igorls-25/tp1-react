import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import Form from './views/Form';
import PrivateRoute from './components/PrivateRoute';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/form" element={<PrivateRoute><Form /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
