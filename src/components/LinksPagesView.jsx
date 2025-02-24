import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
/**
 * @typedef utils
 * @property {(import("react-router-dom").LinkProps & React.RefAttributes<HTMLAnchorElement> & {disabled:boolean, label:any})[]} links
 */

/**
 * @typedef linksPageViewProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {linksPageViewProps} props
 */
function LinksPageView({ links, className = "", ...props }) {
  const length = links.length;
  const { pathname } = useLocation();

  return (
    <div
      className={`h-28 max-md:h-20 flex overflow-auto bg-secondary-main ${className}`}
      {...props}
    >
      {links.map(({ label, className = "", style, disabled, ...link }, i) => {
        const activeTab = pathname.startsWith(link.to);

        return (
          <Link
            key={label}
            className={`h-full flex justify-end pr-20 max-sm:pr-14 -mr-[50px] pl-12 max-sm:pl-7 items-center duration-150 
                ${disabled ? "pointer-events-none" : ""} 
                ${activeTab ? "text-white" : "text-black"} ${
              activeTab
                ? "bg-primary-main hover:bg-primary-dark"
                : "bg-secondary-main hover:bg-primary-light"
            } rounded-l-full text-2xl max-sm:text-xl ${className} ${
              length - 1 === i
                ? "shadow-[-15px_4px_50px_0px_rgba(0,0,0,0.26)]"
                : ""
            }`}
            style={{
              zIndex: (length - i) * 1,
              ...style,
            }}
            {...link}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default memo(LinksPageView);
