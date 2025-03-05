import { memo } from "react";
import SubHeader from "src/components/SubHeader";
import StationsRecordViewFilter from "../components/StationsRecordViewFilter";
import StationsRecordViewToolbar from "../components/StationsRecordViewToolbar";
import useCashingState from "src/hooks/useCashingState";
import StationsRecordInfo from "../components/StationsRecordInfo";
import { Link } from "react-router-dom";
import { stationsRecord } from "src/constants/SectionsInfo";
import StationsRecordViewHeaderTableFilter from "../components/StationsRecordViewHeaderTableFilter";
import StationsRecordViewTable from "../components/StationsRecordViewTable";

function StationsRecordView() {
  const [allocations, setAllocations] = useCashingState(
    "stationsRecordViewFilter",
    {
      vehicle: false,
      agriculture: false,
      industrial: false,
    }
  );

  const [page, setPage] = useCashingState("vehiclesRecordPage", 1);

  const [sortStatuses, setSortStatuses] = useCashingState(
    "vehiclesRecordSortStatuses",
    { id: "ASC" }
  );

  const [selectedRows, setSelectedRows] = useCashingState(
    "vehiclesRecordSelectedRows",
    new Set()
  );

  const [recordsType, setRecordsType] = useCashingState("recordsType", {
    filling_record: false,
    ballances: false,
    record_hundred: false,
    public_record: false,
    activation_code: false,
  });

  return (
    <div>
      <SubHeader>
        <span className="page-title flex gap-1 items-center">
          <Link to={stationsRecord.to}>
            <p className="text-gray-main">سجل المحطات {">"}</p>
          </Link>
          استعراض بطاقة محطة
        </span>
        <div className="flex gap-3 justify-between">
          <StationsRecordViewFilter
            allocations={allocations}
            setAllocations={setAllocations}
          />
          <StationsRecordViewToolbar />
        </div>
      </SubHeader>
      <div className="flex gap-2 max-md:flex-col">
        <div className="w-1/5 max-md:w-full max-lg:w-2/6">
          <StationsRecordInfo />
        </div>
        <div className="me-2 pb-9 w-4/5 max-lg:w-4/6 max-md:w-full h-[70vh]">
          <StationsRecordViewHeaderTableFilter
            recordsType={recordsType}
            setRecordsType={setRecordsType}
          />
          <StationsRecordViewTable
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            setSortStatuses={setSortStatuses}
            sortStatuses={sortStatuses}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(StationsRecordView);
