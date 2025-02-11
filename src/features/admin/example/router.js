import ExampleList from "./pages/ExampleList";

function useExampleRouter() {
  /**
   * @type {import("react-router-dom").RouteObject[]}
   */
  const router = [{ path: "example", element: <ExampleList /> }];

  return router;
}

export default useExampleRouter;
