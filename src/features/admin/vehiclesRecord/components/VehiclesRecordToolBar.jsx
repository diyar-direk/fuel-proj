import { memo } from "react";
import Tooltip from "src/components/Tooltip";
import IconButton from "src/components/buttons/IconButton";
import { ReactComponent as AddIcon } from "src/assets/icons/add.svg";
import { ReactComponent as EditIcon } from "src/assets/icons/edit.svg";
import { ReactComponent as FilterIcon } from "src/assets/icons/filter.svg";
import { ReactComponent as InfoIcon } from "src/assets/icons/info.svg";
import { ReactComponent as PrintIcon } from "src/assets/icons/print.svg";
import { ReactComponent as RemoveIcon } from "src/assets/icons/remove.svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";

function VehiclesRecordToolBar() {
  return (
    <div className="flex gap-3 max-md:gap-1">
      <Tooltip title="Search">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Tooltip>
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
      <Tooltip title="Info">
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add">
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit">
        <IconButton>
          <EditIcon />
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
