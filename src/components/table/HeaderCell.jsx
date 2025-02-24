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
        "text-primary-main text-base max-lg:text-xs flex justify-center items-center py-2 gap-x-2 ",
        className
      ),
    [className]
  );
  return (
    <div className={classNameMemo} {...props}>
      {children}
    </div>
  );
}

export default memo(HeaderCell);
