import { memo } from "react";
import Paper from "./paper/Paper";

/**
 * @typedef subHeaderProps
 * @type {React.HTMLAttributes<HTMLDivElement>}
 */

/**
 * @param {subHeaderProps} props
 */
function SubHeader({ className = "", children, ...props }) {
  return (
    <Paper
      className={
        "flex justify-between px-16 py-3 max-xl:px-4 max-lg:flex-col gap-2 lg:min-h-[74px] max-lg:min-h-[111px] " +
        className
      }
      {...props}
    >
      {children}
    </Paper>
  );
}

export default memo(SubHeader);
