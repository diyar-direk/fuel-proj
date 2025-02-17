import { memo } from "react";
import { ReactComponent as HomeIcon } from "../../../../assets/icons/home.svg";
import ShowSchema from "../../../../components/ShowSchema/ShowSchema";

function VehiclesRecordGeneralSchema() {
  return (
    <div className="flex justify-center items-center mr-14 ml-8 ">
      <ShowSchema
        title={
          <div className="flex items-center">
            <div className="px-2 flex justify-center items-center max-md:w-9 max-md:h-9">
              <HomeIcon />
            </div>
            <p className="text-primary-main font-semibold text-lg">
              المخطط العام
            </p>
          </div>
        }
        children={[
          {
            title: "كوباني",
            arrowProps: { borderStyle: "border-solid" },
            children: [
              {
                title: "مجلس 1",
                children: [
                  {
                    title: "مجلس 3",
                    children: [{ title: "مجلس 4" }, { title: "مجلس 7" }],
                  },
                  { title: "مجلس 5", children: [{ title: "مجلس 6" }] },
                ],
              },
              { title: "مجلس 2" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default memo(VehiclesRecordGeneralSchema);
