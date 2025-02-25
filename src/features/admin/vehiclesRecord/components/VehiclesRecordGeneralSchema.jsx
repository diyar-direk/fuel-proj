import { memo } from "react";
import PathsTree from "src/components/pathsTree/PathsTree";
import { ReactComponent as HomeIcon } from "src/assets/icons/home.svg";

const title = (
  <div className="flex items-center group ">
    <div className="flex justify-center items-center max-md:w-6 max-md:h-3 max-md:mr-[5px] mr-2  max-md:mb-1">
      <HomeIcon className="group-hover:fill-primary-dark" />
    </div>
    <p className="text-primary-main group-hover:text-primary-dark font-semibold text-base max-md:text-sm">
      المخطط العام
    </p>
  </div>
);
const children = [
  {
    title: "كوباني",
    children: [
      { title: "مجلس 1" },
      { title: "مجلس 2" },
      {
        title: "مجلس 3",
      },
      {
        title: "مجلس 4",
      },
    ],
  },
];
function VehiclesRecordGeneralSchema() {
  return (
    <div className="flex justify-center mx-1">
      <PathsTree title={title} children={children} borderStyle="border-solid" />
    </div>
  );
}

export default memo(VehiclesRecordGeneralSchema);
