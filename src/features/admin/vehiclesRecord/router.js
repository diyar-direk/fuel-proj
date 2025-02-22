import { lazy, Suspense } from "react";
import Loading from "../../../components/skeleton/Loading";
const VehiclesRecordList = lazy(() => import("./pages/VehiclesRecordList"));

function useVehiclesRecord() {
  /**
   * @type {import("react-router-dom").RouteObject[]}
   */
  const router = [
    {
      path: "vehicles-record",
      element: (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[65vh]">
              <Loading />
            </div>
          }
        >
          <VehiclesRecordList />
        </Suspense>
      ),
    },
  ];

  return router;
}

export default useVehiclesRecord;
