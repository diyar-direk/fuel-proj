import { lazy } from "react";
import PageFallback from "src/components/PageFallback";
const Login = lazy(() => import("./pages/Login"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
const loginRouter = [
  {
    path: "login",
    element: (
      <PageFallback height="100vh">
        <Login />
      </PageFallback>
    ),
  },
  {
    path: "reset-password",
    element: (
      <PageFallback height="100vh">
        <ResetPassword />
      </PageFallback>
    ),
  },
];

export default loginRouter;
