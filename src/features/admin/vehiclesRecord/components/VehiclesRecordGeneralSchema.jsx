import { memo } from "react";
import ShowSchema from "src/components/ShowSchema/ShowSchema";
import { ReactComponent as HomeIcon } from "src/assets/icons/home.svg";

function VehiclesRecordGeneralSchema() {
  return (
    <div className="flex justify-center mx-1">
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
              {
                title: "مجلس 3",
              },
              { title: "مجلس 4" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default memo(VehiclesRecordGeneralSchema);
