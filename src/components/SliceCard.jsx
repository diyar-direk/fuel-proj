import { twMerge } from "tailwind-merge";
import Paper from "./Paper/Paper";
import Loading from "./Skeleton/Loading";
import { useMemo } from "react";

function SliceCard({
  title,
  value = null,
  currency = "",
  sign = "",
  className = "",
  valueProps = {},
  isLoading,
  isFetching,
  ...otherProps
}) {
  const { className: valueClassName, ...valueOtherProps } = valueProps;
  const className = useMemo(
    () =>
      twMerge(
        `flex p-6 ${value !== null ? "justify-between" : "justify-center"}`,
        className
      ),
    [className, value]
  );

  const valueClassNameMemo = useMemo(
    () =>
      twMerge(
        `font-medium max-w-fit flex justify-center items-center gap-2 text-[24px]`,
        valueClassName
      ),
    [valueClassName]
  );

  return (
    <Paper {...otherProps} className={classNameMEmo}>
      <h4 className="font-medium text-[24px]">{title}</h4>
      <h2 {...valueOtherProps} className={valueClassNameMemo}>
        {!isLoading && isFetching && <Loading className="w-6 h-6" />}
        {isLoading ? <Loading /> : value}
      </h2>
    </Paper>
  );
}

export default SliceCard;
