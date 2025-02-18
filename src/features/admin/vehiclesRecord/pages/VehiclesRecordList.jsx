import { ReactComponent as Vehicle } from "../../../../assets/icons/vehicle.svg";
import PagePath from "../../../../components/PagePath";
import VehiclesRecordTable from "../components/VehiclesRecordTable";
import VehiclesRecordToolBar from "../components/VehiclesRecordToolBar";

function VehiclesRecordList() {
  return (
    <div>
      <PagePath
        paths={[
          {
            children: <Vehicle className="fill-primary-main" />,
          },
          { children: "آليات" },
          { children: "محطات" },
        ]}
      />
      <div>
        <div className="flex justify-between items-center px-16 max-md:px-9 max-sm:px-5 py-3">
          <p className="text-primary-main text-3xl max-md:text-xl max-sm:text-base font-medium">
            استعراض سجل الآليات
          </p>
          <VehiclesRecordToolBar />
        </div>
        <div className="flex gap-2 bg-secondary-main">
          <VehiclesRecordTable />
        </div>
      </div>
    </div>
  );
}

export default VehiclesRecordList;
