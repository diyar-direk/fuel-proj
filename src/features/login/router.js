import Login from "./pages/Login";

function useLoginRouter() {
  /**
   * @type {import("react-router-dom").RouteObject[]}
   */
  const router = [
    {
      path: "login",
      element: <Login />,
    },
  ];

  return router;
}

export default useLoginRouter;
