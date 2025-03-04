import { memo, useCallback, useState } from "react";
import Button from "../buttons/Button";
import { ReactComponent as InfoIcon } from "src/assets/icons/info.svg";
import { ReactComponent as ArrowDownIcon } from "src/assets/icons/arrow-down.svg";
import IconButton from "../buttons/IconButton";
function Accordion({ title, children = "" }) {
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <div>
      <Button className="flex items-center gap-3 " onClick={handleToggle}>
        <InfoIcon className="stroke-white" />
        <p className="text-lg">{title}</p>
        <span className="bg-white rounded-full px-[10px] py-[12px]">
          <ArrowDownIcon
            className={`stroke-primary-main duration-150 ${
              open ? "rotate-0" : "rotate-90"
            }`}
          />
        </span>
      </Button>
      <div>
        <div
          className={`duration-150 border-t-2 border-solid border-secondary-secondary flex ${
            open ? "h-max my-10 py-10" : "h-0 overflow-hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default memo(Accordion);
