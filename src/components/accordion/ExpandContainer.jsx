import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";

function ExpandContainer({
  className = "",
  children,
  expand = false,
  expanedClassName = "",
  notExpanedClassName = "",
  ...props
}) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        `duration-150 ease-in-out overflow-hidden ${
          expand
            ? `max-h-[10000px] ${expanedClassName}`
            : `max-h-0  ${notExpanedClassName}`
        }`,
        className
      ),
    [className, expand, expanedClassName, notExpanedClassName]
  );

  return (
    <div className={classNameMemo} {...props}>
      {children}
    </div>
  );
}

export default memo(ExpandContainer);
