import { memo, useCallback } from "react";
import Checkbox from "src/components/inputs/Checkbox";

const checkboxes = [
  { name: "filling_record", label: "سجل التعبئة" },
  { name: "ballances", label: "أرصدة" },
  { name: "record_hundred", label: "سجل المئة" },
  { name: "public_record", label: "السجل العام" },
  { name: "activation_code", label: "كود التفعيل" },
];

function StationsRecordViewHeaderTableFilter({ recordsType, setRecordsType }) {
  const handleChange = useCallback(
    (e) => {
      const name = e.target.name;
      const checked = e.target.checked;
      setRecordsType({ ...recordsType, [name]: checked });
    },
    [recordsType, setRecordsType]
  );

  return (
    <div className="bg-primary-main py-8 flex justify-evenly max-lg:flex-wrap gap-5">
      {checkboxes.map((props) => (
        <Checkbox
          key={props.name}
          className="whitespace-nowrap py-5 font-bold border-[3px] min-w-40 "
          mainVariant="contained"
          mainColor="secondary"
          checkedClassName="text-primary-main"
          notCheckedClassName="hover:text-primary-main"
          checked={recordsType[props.name] || false}
          onChange={handleChange}
          {...props}
        />
      ))}
    </div>
  );
}

export default memo(StationsRecordViewHeaderTableFilter);
