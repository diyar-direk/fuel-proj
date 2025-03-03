import VehiclesRecordGeneralSchema from "../components/VehiclesPrintGeneralSchema";
import VehiclesRecordTable from "../components/VehiclesPrintTable";
import VehiclesRecordToolBar from "../components/VehiclesPrintToolBar";
import useCashingState from "src/hooks/useCashingState";
import { memo } from "react";
import SubHeader from "src/components/SubHeader";

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
      <SubHeader>
        <div className="flex lg:justify-center items-center ">
          <p className="page-title">سجل الآليات</p>
        </div>
        <VehiclesRecordToolBar selectedRows={selectedRows} />
      </SubHeader>
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
