import { ReactComponent as Vehicle } from "../../../../assets/icons/vehicle.svg";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";
import { ReactComponent as FilterIcon } from "../../../../assets/icons/filter.svg";
import { ReactComponent as PrintIcon } from "../../../../assets/icons/print.svg";
import { ReactComponent as InfoIcon } from "../../../../assets/icons/info.svg";
import { ReactComponent as AddIcon } from "../../../../assets/icons/add.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit.svg";
import { ReactComponent as RemoveIcon } from "../../../../assets/icons/remove.svg";
import PagePath from "../../../../components/PagePath";
import Tooltip from "../../../../components/Tooltip";
import IconButton from "../../../../components/buttons/IconButton";

function VehiclesRecordList() {
  return (
    <div>
      <PagePath
        paths={[
          {
            children: <Vehicle className="fill-primary-main" />,
          },
          { children: "آليات" },
          { children: "محطات" },
        ]}
      />
      <div>
        <div className="flex justify-between items-center px-16 py-3">
          <p className="text-primary-main text-3xl">سجل الآليات</p>
          <div className="flex gap-3">
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
        </div>
      </div>
    </div>
  );
}

export default VehiclesRecordList;
