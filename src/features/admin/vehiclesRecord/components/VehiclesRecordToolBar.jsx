import { memo } from "react";
import Tooltip from "src/components/Tooltip";
import IconButton from "src/components/buttons/IconButton";
import { ReactComponent as AddIcon } from "src/assets/icons/add.svg";
import { ReactComponent as FilterIcon } from "src/assets/icons/filter.svg";
import { ReactComponent as PrintIcon } from "src/assets/icons/print.svg";
import { ReactComponent as RemoveIcon } from "src/assets/icons/remove.svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";
import InputIcon from "src/components/inputs/InputIcon";

function VehiclesRecordToolBar() {
  return (
    <div className="flex items-center gap-3 max-md:gap-1">
      <InputIcon
        EndIcon={SearchIcon}
        className="w-[25vw] "
        containerProps={{ className: "max-md:h-10" }}
      />
      <Tooltip title="Filter">
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Print">
        <IconButton>
          <PrintIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Add">
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Remove">
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default memo(VehiclesRecordToolBar);
