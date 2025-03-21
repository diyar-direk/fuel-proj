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
    title: "كوباني",
    value: "kobani",
    children: [
      { title: "مجلس 1", value: "council1" },
      { title: "مجلس 2", value: "council2" },
      {
        title: "مجلس 3",
        value: "council3",
      },
      {
        title: "مجلس 4",
        value: "council4",
      },
    ],
  },
];
function VehiclesRecordGeneralSchema() {
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

export default memo(VehiclesRecordGeneralSchema);
