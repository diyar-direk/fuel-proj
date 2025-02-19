import { memo } from "react";
import Tooltip from "../../../../components/Tooltip";
import IconButton from "../../../../components/buttons/IconButton";
import {
  AddIcon,
  EditIcon,
  FilterIcon,
  InfoIcon,
  PrintIcon,
  RemoveIcon,
  SearchIcon,
} from "../../../../assets/icons";

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
