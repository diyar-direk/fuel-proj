import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "src/components/container/Container";
import Layout from "src/components/layout/Layout";
import { vehiclePrintRouter } from "src/features/sections/vehicle/vehiclesPrint/router";
import { vehiclesRecordRouter } from "src/features/sections/vehicle/vehiclesRecord/router";
import loginRouter from "src/features/login/router";
import { stationsRecordRouter } from "src/features/sections/station/stationsRecord/router";
import adminRouter from "src/features/admin/router";

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
            ...stationsRecordRouter,
          ],
        },
        ...loginRouter,
        ...adminRouter,
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default AppRouter;
