import { memo } from "react";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";
import { ReactComponent as FilterIcon } from "../../../../assets/icons/filter.svg";
import { ReactComponent as PrintIcon } from "../../../../assets/icons/print.svg";
import { ReactComponent as InfoIcon } from "../../../../assets/icons/info.svg";
import { ReactComponent as AddIcon } from "../../../../assets/icons/add.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit.svg";
import { ReactComponent as RemoveIcon } from "../../../../assets/icons/remove.svg";
import Tooltip from "../../../../components/Tooltip";
import IconButton from "../../../../components/buttons/IconButton";

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
