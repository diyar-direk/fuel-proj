import { memo } from "react";

function LabeledTextBox({ label, children }) {
  return (
    <div className="flex border-[2px] border-vehicle-main w-full p-3 rounded-lg text-lg gap-2">
      <p className="text-vehicle-main">{label}: </p>
      <p className="text-industrial-main break-all">{children}</p>
    </div>
  );
}

export default memo(LabeledTextBox);
