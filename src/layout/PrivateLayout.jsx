import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const storage = localStorage.getItem('token')
    console.log('isAuthenticated:', isAuthenticated); // Debugging line
    console.log('Token in localStorage:', storage); // Debugging line/ Debugging line

    return isAuthenticated && storage ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
