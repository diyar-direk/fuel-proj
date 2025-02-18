import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../components/container/Container";
import Layout from "../components/layout/Layout";
import useExampleRouter from "../features/admin/example/router";
import useLoginRouter from "../features/login/router";
import useVehiclesRecord from "../features/admin/vehiclesRecord/router";

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
            ...useVehiclesRecord(),
          ],
        },
        ...useLoginRouter(),
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default AppRouter;
