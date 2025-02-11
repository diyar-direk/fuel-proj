import { twMerge } from "tailwind-merge";
/**
 * @typedef utils
 * @property {string} newClassName
 */

/**
 * @typedef skeletonProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {skeletonProps} props
 */
function Skeleton(props = { className: "" }) {
  const { newClassName, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={twMerge(
        "animate-pulse p-5 rounded-md bg-gray-400 ",
        otherProps.className
      )}
      {...(newClassName ? { className: newClassName } : {})}
    ></div>
  );
}
export default Skeleton;
