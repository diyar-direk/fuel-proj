import { memo } from "react";
import ShowSchema from "../../../../components/ShowSchema/ShowSchema";
import { HomeIcon } from "../../../../assets/icons";

function VehiclesRecordGeneralSchema() {
  return (
    <div className="flex justify-center items-center mr-4 ml-8 max-md:mr-2">
      <ShowSchema
        title={
          <div className="flex items-center ">
            <div className="flex justify-center items-center max-md:w-6 max-md:h-3 max-md:mr-[5px] mr-2  max-md:mb-1">
              <HomeIcon />
            </div>
            <p className="text-primary-main font-semibold text-base max-md:text-sm">
              المخطط العام
            </p>
          </div>
        }
        children={[
          {
            title: "كوباني",
            arrowProps: { borderStyle: "border-solid" },
            children: [
              { title: "مجلس 1" },
              { title: "مجلس 2" },
              { title: "مجلس 3", children: [{ title: "مجلس 4" }] },
              { title: "مجلس 4" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default memo(VehiclesRecordGeneralSchema);
