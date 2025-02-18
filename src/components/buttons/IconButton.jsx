import React, { memo } from "react";
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
function IconButton({ children, ...props } = { className: "" }) {
  return (
    <div
      {...props}
      className={twMerge(
        "hover:bg-dark-dark duration-150 ease-in-out cursor-pointer p-2 rounded-full flex justify-center items-center max-md:w-9 max-md:h-9",
        props.className
      )}
    >
      {children}
    </div>
  );
}

export default memo(IconButton);
