import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef utils
 * @property {number} cellLength
 */

/**
 * @typedef rowProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {rowProps} props
 */
function Row({ children, className = "", cellLength = 1, style, ...props }) {
  const classNameMemo = useMemo(
    (i) =>
      twMerge(
        `grid py-2 hover:bg-gray-main  duration-[40ms] select-none`,
        className
      ),
    [className]
  );

  return (
    <div
      {...props}
      className={classNameMemo}
      style={{
        gridTemplateColumns: `repeat(${cellLength}, minmax(0, 1fr))`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default memo(Row);
