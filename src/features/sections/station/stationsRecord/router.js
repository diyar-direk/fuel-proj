import { lazy } from "react";
import { stationsRecord } from "src/constants/SectionsInfo";
import PageFallback from "src/components/PageFallback";

const StationsRecordList = lazy(() => import("./pages/StationsRecordList"));

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
export const stationsRecordRouter = [
  {
    path: stationsRecord.to,
    element: (
      <PageFallback>
        <StationsRecordList />
      </PageFallback>
    ),
  },
];
