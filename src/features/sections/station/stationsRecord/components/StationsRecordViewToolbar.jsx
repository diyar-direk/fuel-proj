import React, { memo } from "react";
import IconButton from "src/components/buttons/IconButton";
import Tooltip from "src/components/Tooltip";
import { ReactComponent as AddIcon } from "src/assets/icons/add.svg";
import { ReactComponent as RemoveIcon } from "src/assets/icons/remove.svg";

function StationsRecordViewToolbar() {
  return (
    <div className="flex items-center gap-3 max-md:gap-1">
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

export default memo(StationsRecordViewToolbar);
