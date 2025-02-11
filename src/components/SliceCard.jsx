import { twMerge } from "tailwind-merge";
import Paper from "./Paper/Paper";
import Loading from "./Skeleton/Loading";

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

  return (
    <Paper
      {...otherProps}
      className={twMerge(
        `flex p-6 ${value !== null ? "justify-between" : "justify-center"}`,
        className
      )}
    >
      <h4 className="font-medium text-[24px]">{title}</h4>
      <h2
        {...valueOtherProps}
        className={twMerge(
          `font-medium max-w-fit flex justify-center items-center gap-2 text-[24px]`,
          valueClassName
        )}
      >
        {!isLoading && isFetching && <Loading className="w-6 h-6" />}
        {isLoading ? <Loading /> : value}
      </h2>
    </Paper>
  );
}

export default SliceCard;
