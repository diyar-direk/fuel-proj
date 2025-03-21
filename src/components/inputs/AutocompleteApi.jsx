import { useMemo, useState } from "react";
import useSelectApi from "../../hooks/useSelectApi";
import RawAutocomplete from "./RawAutocomplete";
import Loading from "../skeleton/Loading";
import { twMerge } from "tailwind-merge";
import ParentOption from "./RawSelect/ParentOption";
import useDebouncedValue from "../../hooks/useDebouncedValue";

/**
 * @typedef utils
 * @property {any[]} options
 */

/**
 * @typedef selectApiProps
 * @type {import("./RawSelect/RawSelect").rawSelectProps & utils & import("../../hooks/useSelectApi").useSelectApiOptions & import("./Input").utils}
 */

/**
 * @param {selectApiProps} props
 */
function AutocompleteApi({
  fetchData = () => {},
  queryKey = [],
  useInfiniteQueryOptions = () => {},
  helperText,
  helperTextProps = {},
  error,
  options,
  delay = 500,
  ...props
}) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search, delay);

  const {
    allData,
    handleScroll,
    infiniteQueryOptions: { isFetching },
    uniqueKeys,
  } = useSelectApi({
    fetchData: (query, ...args) =>
      fetchData({ search: debouncedSearch, ...query }, ...args),
    queryKey: [...queryKey, debouncedSearch],
    useInfiniteQueryOptions,
  });

  const classNameMemo = useMemo(
    () =>
      twMerge(
        `w-full h-[35px] ${helperText && error && "border-danger-main"}`,
        props.className
      ),
    [props.className, helperText]
  );

  return (
    <div>
      <RawAutocomplete
        optionsContainer={{
          onScroll: handleScroll,
        }}
        onInputChange={(e) => {
          setSearch(e.target.value);
        }}
        options={[
          ...(allData || []),
          ...(isFetching
            ? [
                {
                  helperElement: true,
                  content: () => (
                    <ParentOption
                      disabled
                      value={null}
                      className="flex justify-center py-1 "
                      key={uniqueKeys[0]}
                    >
                      <Loading className="w-5 h-5" />
                    </ParentOption>
                  ),
                },
              ]
            : [
                {
                  helperElement: true,
                  content: () => (
                    <ParentOption
                      disabled
                      value={null}
                      className="flex justify-center py-1"
                      key={uniqueKeys[1]}
                    >
                      No more data...
                    </ParentOption>
                  ),
                },
              ]),
        ]}
        {...props}
        className={classNameMemo}
      ></RawAutocomplete>
    </div>
  );
}

export default AutocompleteApi;
