import { lazy } from "react";
import PageFallback from "src/components/PageFallback";
const Login = lazy(() => import("./pages/Login"));

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
];

export default loginRouter;
