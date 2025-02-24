import { lazy, Suspense } from "react";
import Loading from "../../../components/skeleton/Loading";
import { vehiclesRecord } from "src/constants/SectionsInfo";

const VehiclesRecordList = lazy(() => import("./pages/VehiclesRecordList"));

function useVehiclesRecord() {
  /**
   * @type {import("react-router-dom").RouteObject[]}
   */
  const router = [
    {
      path: vehiclesRecord.to,
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
