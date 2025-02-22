import React, { useCallback, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import { twMerge } from "tailwind-merge";
import Loading from "../skeleton/Loading";
import LinearLoading from "../skeleton/LinearLoading";
import { ReactComponent as TriangleDownIcon } from "src/assets/icons/triangle-down.svg";

/**
 * @callback getCell
 * @param {object} row
 */

/**
 * @typedef sortStatus
 * @type {"ASC"|"DESC"}
 */

/**
 * @typedef type
 * @type {"actions"}
 */

/**
 * @typedef column
 * @type {object}
 * @property {string} name
 * @property {string} headerName
 * @property {string} headerClassName
 * @property {getCell} getCell
 * @property {string} className
 * @property {type} type
 * @property {boolean} sort
 * @property {sortStatus} defaultSort
 */
/**
 * @typedef utils
 * @property {column[]} props.columns
 * @property {[]} props.rows
 * @property {number} props.currentPage
 * @property {number} props.totalPages
 * @property {function} props.onPageChange
 * @property {React.HTMLAttributes<HTMLDivElement>} props.containerProps
 * @property {React.HTMLAttributes<HTMLDivElement>} props.headerProps
 * @property {React.HTMLAttributes<HTMLDivElement>} props.bodyProps
 * @property {boolean} props.loading
 * @property {boolean} props.secondaryLoading
 * @property {object} sortStatuses
 * @property {(name:string, sortStatus:sortStatus)=>void} onSortChange
 */

/**
 * @typedef tableProps
 * @type {utils}
 */

/**
 * @param {tableProps} props
 */
function Table(props = { columns: [], rows: [] }) {
  const {
    columns,
    rows,
    currentPage,
    onPageChange,
    totalPages,
    containerProps = { className: "" },
    headerProps = { className: "" },
    bodyProps = { className: "" },
    loading,
    secondaryLoading,
    sortStatuses,
    onSortChange = () => {},
  } = props;

  const handleSortClick = useCallback(
    /**
     * @param {column} column
     */
    (column) => () => {
      onSortChange(
        column.name,
        sortStatuses[column.name] === "ASC" ? "DESC" : "ASC"
      );
    },
    [onSortChange, sortStatuses]
  );

  const containerClassName = useMemo(
    () =>
      twMerge(
        "bg-secondary-main min-h-full flex flex-col justify-between",
        containerProps.className
      ),
    [containerProps]
  );

  const headerClassName = useMemo(
    () =>
      twMerge(
        `grid 2xl:grid-cols-${columns.length} bg-primary-light py-2`,
        headerProps.className
      ),
    [headerProps, columns]
  );

  const bodyClassName = useCallback(
    (i) =>
      twMerge(
        ` w-full py-2 grid items-center grid-cols-3 2xl:grid-cols-${
          columns.length
        } ${(i & 1) === 0 ? "bg-secondary-main" : "bg-primary-light"}`,
        bodyProps.className
      ),
    [bodyProps, columns]
  );

  const bodyCellClassName = useCallback(
    (column) =>
      twMerge(
        `text-black text-xs lg:text-base flex justify-center py-2`,
        column.className
      ),
    []
  );

  const handleSortStatusStyle = useCallback(
    /**
     * @param {sortStatus} sortStatus
     */
    (sortStatus) => {
      switch (sortStatus) {
        case "ASC":
          return "rotate-0";
        case "DESC":
          return "rotate-180";
        default:
          return "rotate-90";
      }
    },
    []
  );

  return (
    <div {...containerProps} className={containerClassName}>
      <div>
        <div
          {...headerProps}
          className={headerClassName}
          style={{
            gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
          }}
        >
          {columns.map((column) => (
            <div
              key={column.name}
              className={twMerge(
                "text-primary-main max-lg:text-xs text-base flex justify-center py-2 items-center gap-x-2 ",
                column.headerClassName
              )}
            >
              {column.headerName}
              {column.sort && (
                <button onClick={handleSortClick(column)} className="mt-1">
                  <TriangleDownIcon
                    className={`w-4 h-4 duration-150 ${handleSortStatusStyle(
                      sortStatuses[column.name]
                    )}`}
                  />
                </button>
              )}
            </div>
          ))}
        </div>

        {!loading && secondaryLoading ? (
          <LinearLoading />
        ) : (
          <div className="h-[3px]"></div>
        )}
        <div>
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <Loading />
            </div>
          ) : (
            rows.map((row, i) => (
              <div
                {...bodyProps}
                key={row?.id}
                className={bodyClassName(i)}
                style={{
                  gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
                }}
              >
                {columns.map((column) => (
                  <div key={column.name} className={bodyCellClassName(column)}>
                    {column.getCell ? column.getCell(row) : row[column.name]}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Table;
