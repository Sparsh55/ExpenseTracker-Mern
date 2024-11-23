
import {  Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../Pages/LoginPage';
const PrivateRoute = ({ element, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = null
    
    return user?<Outlet/> :<Navigate to = {LoginPage}/>
  };
  
  export default PrivateRoute;