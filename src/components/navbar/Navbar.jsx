import { useCallback, useMemo } from "react";
import Button from "../buttons/Button";
import ButtonGroup from "../buttons/ButtonGroup";
import { ReactComponent as LogoIcon } from "src/assets/icons/logo.svg";
import { ReactComponent as LogoutIcon } from "src/assets/icons/logout.svg";
import {
  changeCurrentSection,
  currentSectionSelector,
  logout,
} from "src/app/slice";
import {
  agriculture,
  vehicle,
  vehiclesRecord,
} from "src/constants/SectionsInfo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const currentSection = useSelector(currentSectionSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickSection = useCallback(
    (to) => () => {
      navigate(to);
    },
    [navigate]
  );

  const sectoinsOptions = useMemo(
    () => [
      {
        value: agriculture.name,
        label: agriculture.label,
        Icon: agriculture.icon,
      },
      {
        value: vehicle.name,
        label: vehicle.label,
        Icon: vehicle.icon,
        onClick: handleClickSection(vehiclesRecord.to),
      },
    ],
    [handleClickSection]
  );

  const handleCurrentSectionChange = useCallback(
    (e) => {
      dispatch(changeCurrentSection(e.target.value));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div className="flex justify-between max-md:flex-col px-16 max-lg:p-3 items-center gap-2">
        <div>
          <LogoIcon className="w-72 max-lg:max-w-60 max-lg:max-h-14" />
        </div>
        <div className="flex gap-x-2 justify-between max-sm:flex-col max-sm:items-center w-min max-md:w-full max-sm:gap-2 ">
          <ButtonGroup
            options={sectoinsOptions}
            activeValue={currentSection}
            onChange={handleCurrentSectionChange}
          />
          <Button
            color="danger"
            variant="contained"
            className="w-max max-sm:w-full flex gap-x-2 px-7 justify-center items-center"
            style={{ borderRadius: "2rem" }}
            onClick={handleLogout}
          >
            <LogoutIcon />
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </div>
  );
}
