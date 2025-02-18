import VehiclesRecordList from "./pages/VehiclesRecordList";

function useVehiclesRecord() {
  /**
   * @type {import("react-router-dom").RouteObject[]}
   */
  const router = [{ path: "vehicles-record", element: <VehiclesRecordList /> }];

  return router;
}

export default useVehiclesRecord;
