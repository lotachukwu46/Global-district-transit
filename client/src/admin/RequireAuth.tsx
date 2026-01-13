import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const raw = localStorage.getItem("admin_session");

  if (!raw) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  try {
    const session = JSON.parse(raw);
    const isExpired = Date.now() > session.expires;

    if (!session.token || isExpired) {
      throw new Error("SESSION_EXPIRED");
    }
  } catch (e) {
    localStorage.removeItem("admin_session");
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};
