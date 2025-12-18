import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '@/utils/cookie';

const ProtectedRoute = () => {
  const accessToken = getCookie('accessToken');

  if (!accessToken) {
    return <Navigate to="/register/greeting" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
