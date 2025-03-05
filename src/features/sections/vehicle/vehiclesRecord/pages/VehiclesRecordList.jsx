import HorizontalScrollableList from "src/components/lists/HorizontalScrollableList";
import VehiclesRecordGeneralSchema from "../components/VehiclesRecordGeneralSchema";
import VehiclesRecordTable from "../components/VehiclesRecordTable";
import VehiclesRecordToolBar from "../components/VehiclesRecordToolBar";
import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getVehiclesRecordApi } from "../api/api";
import SubHeader from "src/components/SubHeader";

const items = [
  "بنزين(23)",
  "مازوت(32)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
  "بنزين(41)",
];

function VehiclesRecordList() {
  const [page, setPage] = useCashingState("vehiclesRecordPage", 1);

  const vehcilesRecord = useInfiniteQuery({
    queryKey: ["vehiclesRecord", page],
    queryFn: () => getVehiclesRecordApi({ page }),
    getNextPageParam: (data) => data,
  });

  const [sortStatuses, setSortStatuses] = useCashingState(
    "vehiclesRecordSortStatuses",
    { id: "ASC" }
  );

  const [selectedRows, setSelectedRows] = useCashingState(
    "vehiclesRecordSelectedRows",
    new Set()
  );

  return (
    <div>
      <SubHeader>
        <div className="flex lg:justify-center items-center">
          <p className="page-title">سجل الآليات</p>
          <HorizontalScrollableList
            items={items}
            className="mx-2 max-w-[46vw] max-2xl:max-w-[33vw]  max-lg:max-w-full "
          />
        </div>
        <VehiclesRecordToolBar selectedRows={selectedRows} />
      </SubHeader>
      <div className="flex gap-2 bg-secondary-main">
        <VehiclesRecordGeneralSchema />
        <VehiclesRecordTable
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
  );
}

export default memo(VehiclesRecordList);
