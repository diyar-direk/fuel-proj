import HorizontalScrollableList from "src/components/lists/HorizontalScrollableList";
import VehiclesRecordGeneralSchema from "../components/VehiclesRecordGeneralSchema";
import VehiclesRecordTable from "../components/VehiclesRecordTable";
import VehiclesRecordToolBar from "../components/VehiclesRecordToolBar";
import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";

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
      <div className="flex justify-between  px-16 py-3 max-xl:px-4 max-lg:flex-col gap-2">
        <div className="flex lg:justify-center items-center">
          <p className="text-primary-main text-2xl max-md:text-xl max-sm:text-base font-medium min-w-max">
            استعراض سجل الآليات
          </p>
          <HorizontalScrollableList
            items={items}
            className="mx-2 max-w-[46vw] max-2xl:max-w-[33vw]  max-lg:max-w-full "
          />
        </div>
        <VehiclesRecordToolBar selectedRows={selectedRows} />
      </div>
      <div className="flex gap-2 bg-secondary-main">
        <VehiclesRecordGeneralSchema />
        <VehiclesRecordTable
          selectedRows={selectedRows}
          sortStatuses={sortStatuses}
          setSelectedRows={setSelectedRows}
          setSortStatuses={setSortStatuses}
        />
      </div>
    </div>
  );
}

export default memo(VehiclesRecordList);
