import { memo, useState } from "react";
import PathsTree from "src/components/pathsTree/PathsTree";
import { ReactComponent as HomeIcon } from "src/assets/icons/home.svg";

const title = (selected) => (
  <div className="flex items-center group ">
    <div className="flex justify-center items-center max-md:w-6 max-md:h-3 rtl:max-md:mr-[5px] rtl:max-md:ml-[5px] rtl:mr-2 ltr:ml-2 max-md:mb-1">
      <HomeIcon className="group-hover:fill-primary-dark" />
    </div>
    <p className="text-primary-main group-hover:text-primary-dark font-semibold text-base max-md:text-sm">
      المخطط العام
    </p>
  </div>
);
const children = [
  {
    title: "مديرية 1",
    value: "directorate",
    children: [
      { title: "لجنة 1", value: "committee1" },
      { title: "لجنة 2", value: "committee2" },
      {
        title: "لجنة 3",
        value: "committee3",
      },
      {
        title: "لجنة 4",
        value: "committee4",
      },
    ],
  },
];
function VehiclesPrintGeneralSchema() {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center max-xl:mx-4 max-sm:mx-0 w-1/6 max-sm:w-1/3">
      <PathsTree
        title={title}
        children={children}
        borderStyle="border-solid"
        value={null}
        onChange={setValue}
        selectedValue={value}
      />
    </div>
  );
}

export default memo(VehiclesPrintGeneralSchema);
