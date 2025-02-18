import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../components/container/Container";
import Layout from "../components/layout/Layout";
import useExampleRouter from "../features/admin/example/router";
import useLoginRouter from "../features/login/router";
import useVehiclesRecord from "../features/admin/vehiclesRecord/router";
import HorizontalScrollableList from "../components/lists/HorizontalScrollableList";

function AppRouter() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ];
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              element: (
                <HorizontalScrollableList
                  items={items}
                  className="w-[500px] p-2"
                />
              ),
              index: true,
            },
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
