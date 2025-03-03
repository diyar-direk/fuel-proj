import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "src/components/container/Container";
import Layout from "src/components/layout/Layout";
import { vehiclePrintRouter } from "src/features/sections/vehicle/vehiclesPrint/router";
import { vehiclesRecordRouter } from "src/features/sections/vehicle/vehiclesRecord/router";
import loginRouter from "src/features/login/router";

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
            ...vehiclesRecordRouter,
            ...vehiclePrintRouter,
          ],
        },
        ...loginRouter,
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default AppRouter;
