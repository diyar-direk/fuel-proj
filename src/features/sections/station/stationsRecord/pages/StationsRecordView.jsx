import { memo } from "react";
import SubHeader from "src/components/SubHeader";
import StationsRecordViewFilter from "../components/StationsRecordViewFilter";
import StationsRecordViewToolbar from "../components/StationsRecordViewToolbar";
import useCashingState from "src/hooks/useCashingState";
import StationsRecordInfo from "../components/StationsRecordInfo";
import { Link } from "react-router-dom";
import { stationsRecord } from "src/constants/SectionsInfo";

function StationsRecordView() {
  const [allocations, setAllocations] = useCashingState(
    "stationsRecordViewFilter",
    {
      vehicle: false,
      agriculture: false,
      industrial: false,
    }
  );

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
      <div className="flex gap-2">
        <StationsRecordInfo />
      </div>
    </div>
  );
}

export default memo(StationsRecordView);
