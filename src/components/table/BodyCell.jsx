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
        `text-base max-lg:text-xs max-lg:py-2 py-5 truncate max-w-[100px]`,
        className
      ),
    [className]
  );
  return (
    <td className={classNameMemo} {...props} align="center">
      {children}
    </td>
  );
}

export default memo(BodyCell);
