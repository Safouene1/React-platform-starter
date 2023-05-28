import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = false;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}
