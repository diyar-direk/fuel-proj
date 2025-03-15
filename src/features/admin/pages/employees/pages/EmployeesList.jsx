import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Header from "src/components/sidbar/Header";
import Sidebar from "src/components/sidbar/Sidbar";
import SubHeader from "src/components/SubHeader";
import EmployessTable from "../components/EmployessTable";
import EmployessToolBar from "../components/EmployessToolBar";
import { getEmployess } from "../api/api";

function EmployessList() {
  const [page, setPage] = useCashingState("employessPage", 1);

  const vehcilesRecord = useInfiniteQuery({
    queryKey: ["employess", page],
    queryFn: () => getEmployess({ page }),
    getNextPageParam: (data) => data,
  });

  const [sortStatuses, setSortStatuses] = useCashingState("employessStatus", {
    id: "ASC",
  });

  const [selectedRows, setSelectedRows] = useCashingState(
    "employessRows",
    new Set()
  );

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-[40px]">
          <SubHeader>
            <EmployessToolBar />
          </SubHeader>
          <EmployessTable
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

export default memo(EmployessList);
