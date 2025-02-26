import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef utils
 * @property
 */

/**
 * @typedef headerCellProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {headerCellProps} props
 */
function HeaderCell({ className = "", children, ...props }) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        "text-primary-main text-base max-lg:text-xs max-lg:py-2 py-5 px-1",
        className
      ),
    [className]
  );
  return (
    <th className={classNameMemo} {...props} align="center">
      {children}
    </th>
  );
}

export default memo(HeaderCell);
