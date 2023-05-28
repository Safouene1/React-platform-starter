import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useReduxHooks';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAppSelector((state) => {
    const user = localStorage.getItem('user');
    return state.UserSlice.authenticated || !!user;
  });

  let location = useLocation();

  if (!auth) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}
