import { memo, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
/**
 * @typedef placement
 * @type {"top"|"left"|"right"|"bottom"}
 */

/**
 * @typedef utils
 * @property {string} title
 * @property {placement} placement
 */

/**
 * @typedef tooltipProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {tooltipProps} props
 */
function Tooltip({
  className = "",
  children,
  title,
  placement = "bottom",
  ...props
}) {
  const [mouseIn, setMouseIn] = useState(false);

  const classNameMemo = useMemo(
    () => twMerge(`relative`, className),
    [className]
  );

  return (
    <div
      {...props}
      className={classNameMemo}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      {children}
      {mouseIn && (
        <div
          className={`absolute p-2 text-sm bg-dark-light text-white rounded font-medium ${placementStyle[placement]}`}
        >
          {title}
        </div>
      )}
    </div>
  );
}

export default memo(Tooltip);

const placementStyle = {
  bottom: "-bottom-11 left-1/2 -translate-x-1/2",
  top: "-top-11 left-1/2 -translate-x-1/2",
  left: "-left-20 top-1/2 -translate-y-1/2",
  right: "-right-20 top-1/2 -translate-y-1/2",
};
