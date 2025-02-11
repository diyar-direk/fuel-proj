import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const loggedIn = useSelector((state) => state.app.loggedIn);

  if (loggedIn) {
    return children;
  }

  return <Navigate to="login" replace />;
}

export default memo(PrivateRoute);
