import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getDirectorates } from "../api/api";
import DirectorateTable from "../components/DirectorateTable";
import Header from "src/components/sidbar/Header";
import Sidebar from "src/components/sidbar/Sidbar";
import SubHeader from "src/components/SubHeader";
import DirectoratesToolBar from "../components/DirectoratesToolBar";

function DirectoratesList() {
  const [page, setPage] = useCashingState("directoratesPage", 1);

  const vehcilesRecord = useInfiniteQuery({
    queryKey: ["directorates", page],
    queryFn: () => getDirectorates({ page }),
    getNextPageParam: (data) => data,
  });

  const [sortStatuses, setSortStatuses] = useCashingState(
    "directoratesStatus",
    { id: "ASC" }
  );

  const [selectedRows, setSelectedRows] = useCashingState(
    "directoratesRows",
    new Set()
  );

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-[40px]">
          <SubHeader>
            <DirectoratesToolBar />
          </SubHeader>
          <DirectorateTable
            selectedRows={selectedRows}
            sortStatuses={sortStatuses}
            setSelectedRows={setSelectedRows}
            setSortStatuses={setSortStatuses}
            page={page}
            setPage={setPage}
            vehcilesRecord={vehcilesRecord.data?.pages?.[0]}
            loading={vehcilesRecord.isLoading}
            secondaryLoading={vehcilesRecord.isFetching}
          />
        </div>
      </div>
    </>
  );
}

export default memo(DirectoratesList);
