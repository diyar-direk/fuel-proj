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
        `duration-150 ${
          expand
            ? `h-max ${expanedClassName}`
            : `h-0 overflow-hidden ${notExpanedClassName}`
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
