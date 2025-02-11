import { memo } from "react";
import Option from "./RawSelect/Option";
import RawSelect from "./RawSelect/RawSelect";
import Loading from "../Skeleton/Loading";
import useSelectApi from "../../hooks/useSelectApi";
import { twMerge } from "tailwind-merge";

/**
 * @callback children
 * @param {object} data
 * @returns {Option}
 */

/**
 * @typedef utils
 * @property {children} children
 */

/**
 * @typedef selectApiProps
 * @type {import("./RawSelect/RawSelect").rawSelectProps & utils & import("../../hooks/useSelectApi").useSelectApiOptions & import("./Input").utils}
 */

/**
 * @param {selectApiProps} props
 */
function SelectApi({
  fetchData = () => {},
  queryKey = [],
  children = () => {},
  useInfiniteQueryOptions = () => {},
  helperText,
  helperTextProps = {},
  error,
  ...props
}) {
  const {
    handleScroll,
    allData,
    infiniteQueryOptions: { isFetching },
    uniqueKeys,
  } = useSelectApi({
    fetchData,
    queryKey,
    useInfiniteQueryOptions,
  });

  return (
    <div>
      <RawSelect
        optionsContainer={{
          onScroll: handleScroll,
        }}
        {...props}
        className={twMerge(
          `w-full h-[35px] ${helperText && "border-danger-main"}`,
          props.className
        )}
      >
        {allData?.length &&
          [
            ...allData,
            {
              info: true,
              content: isFetching ? (
                <Option
                  disabled
                  value={null}
                  className="flex justify-center py-1 "
                  key={uniqueKeys[0]}
                >
                  <Loading className="w-5 h-5" />
                </Option>
              ) : (
                <Option
                  disabled
                  value={null}
                  className="flex justify-center py-1"
                  key={uniqueKeys[1]}
                >
                  No more data...
                </Option>
              ),
            },
          ].map((data) => (data.info === true ? data.content : children(data)))}
      </RawSelect>
      <p
        {...helperTextProps}
        className={
          (error && "text-red-600 ") + helperTextProps.className + " text-sm"
        }
      >
        {helperText}
      </p>
    </div>
  );
}

export default memo(SelectApi);
