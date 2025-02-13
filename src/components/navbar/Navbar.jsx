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
    <div className="h-28 bg-white">
      <div className="flex justify-between px-16 items-center">
        <div>
          <Logo />
        </div>
        <div className="flex gap-x-4">
          <ButtonGroup
            options={allocationOptions}
            activeValue={allocationPage}
            onChange={handleAllocationChange}
          />
          <Button
            color="danger"
            variant="contained"
            className="w-max flex gap-x-2 px-7 items-center"
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
