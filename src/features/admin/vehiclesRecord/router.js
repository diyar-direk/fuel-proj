import { lazy } from "react";
import { vehiclesRecord } from "src/constants/SectionsInfo";
import PageFallback from "src/components/PageFallback";

const VehiclesRecordList = lazy(() => import("./pages/VehiclesRecordList"));

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
export const vehiclesRecordRouter = [
  {
    path: vehiclesRecord.to,
    element: (
      <PageFallback>
        <VehiclesRecordList />
      </PageFallback>
    ),
  },
];
