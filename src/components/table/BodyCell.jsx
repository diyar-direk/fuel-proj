import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef utils
 * @property
 */

/**
 * @typedef bodyCellProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {bodyCellProps} props
 */
function BodyCell({ className = "", children, ...props }) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        `text-base max-lg:text-xs flex justify-center items-center py-2 gap-x-2`,
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

export default memo(BodyCell);
