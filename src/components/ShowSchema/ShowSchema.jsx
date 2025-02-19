import { memo, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Schema from "./Schema";

/**
 * @typedef utils
 * @property {string} title
 * @property {utils[]} children
 * @property {number} arrowHeight - arrowHeight (the default: 40)
 * @property {React.Ref<HTMLDivElement> | undefined} ref
 * @property {import("./Arrow").arrowProps} arrowProps
 */

/**
 * @typedef showSchemaProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {showSchemaProps} props
 */
function ShowSchema({
  className,
  title,
  children = [],
  arrowHeight = 40,
  style = {},
  ref,
  ...props
}) {
  const classNameMemo = useMemo(
    () => twMerge(`flex flex-col border-solid max-md:mt-[10px]`, className),
    [className]
  );
  const containerArrowsRef = useRef(null);

  return (
    <div
      className={classNameMemo}
      style={{ marginTop: `${arrowHeight * 0.63}px`, ...style }}
      ref={ref}
      {...props}
    >
      <span className="text-sm min-w-max max-md:text-xs ">{title}</span>
      <div className="mr-6 max-md:mr-4" ref={containerArrowsRef}>
        {children.map((props, i) => (
          <Schema
            key={i}
            i={i}
            {...props}
            containerArrowsRef={containerArrowsRef}
            arrowHeight={arrowHeight}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(ShowSchema);
