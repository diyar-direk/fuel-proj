import { memo } from "react";
import Tooltip from "src/components/Tooltip";
import IconButton from "src/components/buttons/IconButton";
import { ReactComponent as AddIcon } from "src/assets/icons/add.svg";
import { ReactComponent as FilterIcon } from "src/assets/icons/filter.svg";
import { ReactComponent as PrintIcon } from "src/assets/icons/print.svg";
import { ReactComponent as RemoveIcon } from "src/assets/icons/remove.svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";
import InputIcon from "src/components/inputs/InputIcon";
import { useNavigate } from "react-router-dom";

function EmployessToolBar() {
  const nav = useNavigate();
  const navigateToAddPage = () => nav("/create-employe");
  return (
    <div className="flex items-center gap-3 max-md:gap-1">
      <InputIcon
        EndIcon={SearchIcon}
        className="flex-1"
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

      <Tooltip title="أضافة">
        <IconButton onClick={navigateToAddPage}>
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="حذف">
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default memo(EmployessToolBar);
