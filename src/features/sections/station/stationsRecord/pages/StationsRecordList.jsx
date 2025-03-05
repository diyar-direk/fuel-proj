import StationsRecordGeneralSchema from "../components/StationsRecordGeneralSchema";
import StationsRecordTable from "../components/StationsRecordTable";
import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getStationsRecordApi } from "../api/api";
import SubHeader from "src/components/SubHeader";

function StationsRecordList() {
  const [page, setPage] = useCashingState("stationsRecordPage", 1);

  const stationsRecord = useInfiniteQuery({
    queryKey: ["stationsRecord", page],
    queryFn: () => getStationsRecordApi({ page }),
    getNextPageParam: (data) => data,
  });

  const [sortStatuses, setSortStatuses] = useCashingState(
    "stationsRecordSortStatuses",
    { id: "ASC" }
  );

  const [selectedRows, setSelectedRows] = useCashingState(
    "stationsRecordSelectedRows",
    new Set()
  );

  return (
    <div>
      <SubHeader className="force-all:items-center force-all:flex-row force-all:min-h-min">
        <p className="page-title">سجل المحطات</p>
      </SubHeader>
      <div className="flex gap-2 bg-secondary-main">
        <StationsRecordGeneralSchema />
        <StationsRecordTable
          selectedRows={selectedRows}
          sortStatuses={sortStatuses}
          setSelectedRows={setSelectedRows}
          setSortStatuses={setSortStatuses}
          page={page}
          setPage={setPage}
          stationsRecord={stationsRecord.data?.pages?.[0]}
          loading={stationsRecord.isLoading}
          secondaryLoading={stationsRecord.isFetching}
        />
      </div>
    </div>
  );
}

export default memo(StationsRecordList);
