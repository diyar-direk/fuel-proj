import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import LinksPagesView from "../LinksPagesView";
import SectionsInfo from "src/constants/SectionsInfo";
import { useSelector } from "react-redux";
import { currentSectionSelector } from "src/app/slice";

function Layout() {
  const currentSection = useSelector(currentSectionSelector);

  const links = useMemo(() => {
    const section = SectionsInfo[currentSection];
    const SectionIcon = section?.icon;
    const pages = section?.pages || {};

    console.log(section);

    return [
      {
        label: SectionIcon && <SectionIcon className="fill-primary-main" />,
        disabled: true,
      },
      ...Object.values(pages).map(({ label, to }) => ({ label, to })),
    ];
  }, [currentSection]);

  return (
    <div>
      <Navbar />
      <LinksPagesView links={links} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
