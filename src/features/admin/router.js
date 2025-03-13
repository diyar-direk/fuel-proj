import { lazy } from "react";
import PageFallback from "src/components/PageFallback";
const DirectoratesList = lazy(() =>
  import("./pages/directorate/pages/DirectoratesList")
);
const AddSector = lazy(() => import("./pages/sector/pages/AddSector"));
const AddCouncil = lazy(() => import("./pages/council/pages/AddCouncil"));
const AddDirectorate = lazy(() =>
  import("./pages/directorate/pages/AddDirectorate")
);

const adminRouter = [
  {
    path: "add-sector",
    element: (
      <PageFallback height="100vh">
        <AddSector />
      </PageFallback>
    ),
  },
  {
    path: "add-council",
    element: (
      <PageFallback height="100vh">
        <AddCouncil />
      </PageFallback>
    ),
  },
  {
    path: "add-directorate",
    element: (
      <PageFallback height="100vh">
        <AddDirectorate />
      </PageFallback>
    ),
  },
  {
    path: "directorates",
    element: (
      <PageFallback height="100vh">
        <DirectoratesList />
      </PageFallback>
    ),
  },
];

export default adminRouter;
