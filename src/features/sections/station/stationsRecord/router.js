import { lazy } from "react";
import { stationsRecord } from "src/constants/SectionsInfo";
import PageFallback from "src/components/PageFallback";

const StationsRecordList = lazy(() => import("./pages/StationsRecordList"));
const StationsRecordView = lazy(() => import("./pages/StationsRecordView"));

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
  {
    path: stationsRecord.view.to(),
    element: (
      <PageFallback>
        <StationsRecordView />
      </PageFallback>
    ),
  },
];
