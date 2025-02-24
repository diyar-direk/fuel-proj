import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
/**
 * @typedef utils
 * @property
 */

/**
 * @typedef skeletonProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {skeletonProps} props
 */
function Skeleton({ className = "", ...props }) {
  const classNameMemo = useMemo(
    () => twMerge("animate-pulse p-5 rounded-md bg-gray-400 ", className),
    [className]
  );

  return <div {...props} className={classNameMemo}></div>;
}
export default Skeleton;
