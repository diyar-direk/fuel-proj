import React, { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";
/**
 * @typedef utils
 * @property {}
 */

/**
 * @typedef iconButtonProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {iconButtonProps} props
 */
function IconButton({ className = "", children, ...props }) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        "hover:bg-dark-dark duration-150 ease-in-out cursor-pointer p-2 rounded-full flex justify-center items-center max-lg:w-12 max-lg:h-12 max-md:w-9 max-md:h-9",
        className
      ),
    [className]
  );

  return (
    <button {...props} className={classNameMemo}>
      {children}
    </button>
  );
}

export default memo(IconButton);
