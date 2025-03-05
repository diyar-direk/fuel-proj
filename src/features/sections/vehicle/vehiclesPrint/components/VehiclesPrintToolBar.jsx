import { memo } from "react";
import Tooltip from "src/components/Tooltip";
import IconButton from "src/components/buttons/IconButton";
import { ReactComponent as ImportIcon } from "src/assets/icons/import.svg";
import { ReactComponent as FilterIcon } from "src/assets/icons/filter.svg";
import { ReactComponent as PrintIcon } from "src/assets/icons/print.svg";
import { ReactComponent as ExportIcon } from "src/assets/icons/export.svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";
import InputIcon from "src/components/inputs/InputIcon";

function VehiclesPrintToolBar({ selectedRows }) {
  return (
    <div className="flex items-center gap-3 max-md:gap-1">
      <InputIcon
        EndIcon={SearchIcon}
        // className="w-[25vw] "
        containerProps={{ className: "max-md:h-10" }}
      />
      <Tooltip title="فلترة">
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="طباعة">
        <IconButton>
          <PrintIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="استيراد">
        <IconButton>
          <ImportIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="تصدير">
        <IconButton>
          <ExportIcon
            className={
              selectedRows.size ? "stroke-danger-main fill-danger-main" : ""
            }
          />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default memo(VehiclesPrintToolBar);
