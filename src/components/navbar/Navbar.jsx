import Button from "../buttons/Button";
import useCashingState from "../../hooks/useCashingState";
import { useCallback, useMemo } from "react";
import ButtonGroup from "../buttons/ButtonGroup";
import {
  AgricultureIcon,
  LogoIcon,
  LogoutIcon,
  VehicleIcon,
} from "../../assets/icons";

export default function Navbar() {
  const [allocationPage, setAllocationPage] = useCashingState(
    "allocationPage",
    "vehicle"
  );

  const allocationOptions = useMemo(
    () => [
      {
        value: "agriculture",
        label: "زراعي",
        Icon: AgricultureIcon,
      },
      {
        value: "vehicle",
        label: "آليات",
        Icon: VehicleIcon,
      },
    ],
    []
  );

  const handleAllocationChange = useCallback(
    (e) => {
      setAllocationPage(e.target.value);
    },
    [setAllocationPage]
  );

  return (
    <div className="bg-white">
      <div className="flex justify-between max-md:flex-col px-16 max-lg:p-3 items-center gap-2">
        <div>
          <LogoIcon className="w-72 max-lg:max-w-60 max-lg:max-h-14" />
        </div>
        <div className="flex gap-x-2 justify-between max-sm:flex-col max-sm:items-center w-min max-md:w-full max-sm:gap-2 ">
          <ButtonGroup
            options={allocationOptions}
            activeValue={allocationPage}
            onChange={handleAllocationChange}
          />
          <Button
            color="danger"
            variant="contained"
            className="w-max max-sm:w-full flex gap-x-2 px-7 justify-center items-center"
            style={{ borderRadius: "2rem" }}
          >
            <LogoutIcon />
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </div>
  );
}
