import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import PagePath from "../PagePath";
import { useCallback, useState } from "react";
import { VehicleIcon } from "../../assets/icons";

function Layout() {
  const [mainPath] = useState({
    children: <VehicleIcon className="fill-primary-main" />,
  });

  const [paths, setPaths] = useState([mainPath]);

  const handleAddPaths = useCallback(
    (paths) => {
      setPaths([mainPath, ...paths]);
    },
    [mainPath]
  );

  return (
    <div>
      <Navbar />
      <PagePath paths={paths} />
      <div>
        <Outlet context={{ handleAddPaths }} />
      </div>
    </div>
  );
}

export default Layout;
