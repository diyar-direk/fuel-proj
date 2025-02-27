import VehiclesRecordGeneralSchema from "../components/VehiclesPrintGeneralSchema";
import VehiclesRecordTable from "../components/VehiclesPrintTable";
import VehiclesRecordToolBar from "../components/VehiclesPrintToolBar";
import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";

function VehiclesPrintList() {
  const [sortStatuses, setSortStatuses] = useCashingState(
    "vehiclesPrintSortStatuses",
    { id: "ASC" }
  );

  const [selectedRows, setSelectedRows] = useCashingState(
    "vehiclesPrintSelectedRows",
    new Set()
  );

  return (
    <div>
      <div className="flex justify-between  px-16 py-3 max-xl:px-4 max-lg:flex-col gap-2">
        <div className="flex lg:justify-center items-center ">
          <p className="text-primary-main text-2xl max-md:text-xl max-sm:text-base font-medium min-w-max">
            استعراض سجل الآليات
          </p>
        </div>
        <VehiclesRecordToolBar selectedRows={selectedRows} />
      </div>
      <div className="flex xs:gap-2 bg-secondary-main relative">
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

export default memo(VehiclesPrintList);
