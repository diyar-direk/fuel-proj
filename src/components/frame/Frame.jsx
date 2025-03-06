import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";

function Frame({
  children,
  className = "",
  title,
  titleProps = { className: "" },
}) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        `border-[2px] border-solid border-primary-main flex pb-8 px-4 gap-x-2 `,
        className
      ),
    [className]
  );

  const titleClassNameMemo = useMemo(
    () =>
      twMerge(`text-primary-main text-xl font-semibold`, titleProps.className),
    [titleProps.className]
  );

  return (
    <fieldset className={classNameMemo}>
      <legend {...titleProps} className={titleClassNameMemo}>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export default memo(Frame);
