import VehiclesRecordGeneralSchema from "../components/VehiclesRecordGeneralSchema";
import VehiclesRecordTable from "../components/VehiclesRecordTable";
import VehiclesRecordToolBar from "../components/VehiclesRecordToolBar";
import useAddPath from "../../../../hooks/useAddPath";

const paths = [{ children: "آليات" }, { children: "محطات" }];

function VehiclesRecordList() {
  useAddPath(paths);

  return (
    <div>
      <div className="flex justify-between items-center px-16 max-md:px-9 max-sm:px-5 py-3">
        <p className="text-primary-main text-2xl max-md:text-xl max-sm:text-base font-medium">
          استعراض سجل الآليات
        </p>
        <VehiclesRecordToolBar />
      </div>
      <div className="flex gap-2 bg-secondary-main">
        <VehiclesRecordGeneralSchema />
        <VehiclesRecordTable />
      </div>
    </div>
  );
}

export default VehiclesRecordList;
