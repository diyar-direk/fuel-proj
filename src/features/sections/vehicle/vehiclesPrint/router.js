import { lazy } from "react";
import { vehiclesPrint } from "src/constants/SectionsInfo";
import PageFallback from "src/components/PageFallback";

const VehiclesPrintList = lazy(() => import("./pages/VehiclesPrintList"));

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
export const vehiclePrintRouter = [
  {
    path: vehiclesPrint.to,
    element: (
      <PageFallback>
        <VehiclesPrintList />
      </PageFallback>
    ),
  },
];
