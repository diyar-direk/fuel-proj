import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Vehicle } from "../../assets/icons/vehicle.svg";
import { ReactComponent as Agriculture } from "../../assets/icons/agriculture.svg";
import Button from "../buttons/Button";
import useCashingState from "../../hooks/useCashingState";
import { useCallback, useMemo } from "react";
import ButtonGroup from "../buttons/ButtonGroup";

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
        Icon: Agriculture,
      },
      {
        value: "vehicle",
        label: "آليات",
        Icon: Vehicle,
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
          <Logo className="w-72 max-lg:max-w-60 max-lg:max-h-14" />
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
            <Logout />
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </div>
  );
}
