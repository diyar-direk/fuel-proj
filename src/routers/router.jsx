import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useExampleRouter from "../features/admin/example/router";
import Container from "../components/container/Container";
import Layout from "../components/layout/Layout";
import useLoginRouter from "../features/login/router";

function AppRouter() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          element: <Layout />,
          children: [
            { element: <h1>Home</h1>, index: true },
            ...useExampleRouter(),
          ],
        },
        ...useLoginRouter(),
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default AppRouter;
