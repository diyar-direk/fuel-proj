import React, { useMemo } from "react";
import VendorPager from "../pagers/VendorPager/VendorPager";
import { twMerge } from "tailwind-merge";
import Loading from "../Skeleton/Loading";
import LinearLoading from "../Skeleton/LinearLoading";

/**
 * @callback getCell
 * @param {object} row
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
 */

/**
 * @param {object} props
 * @param {column[]} props.columns
 * @param {[]} props.rows
 * @param {number} props.currentPage
 * @param {number} props.totalPages
 * @param {function} props.onPageChange
 * @param {React.HTMLAttributes<HTMLDivElement>} props.containerProps
 * @param {React.HTMLAttributes<HTMLDivElement>} props.headerProps
 * @param {React.HTMLAttributes<HTMLDivElement>} props.bodyProps
 * @param {boolean} props.loading
 * @param {boolean} props.secondaryLoading
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
  } = props;

  const bodyClassName = useMemo(
    () =>
      twMerge(
        ` w-full mt-4 py-2 border-b-[#23232133] border-b-[0.5px] grid items-center grid-cols-3 3xl:grid-cols-${columns.length}`,
        bodyProps.className
      ),
    [bodyProps, columns]
  );

  return (
    <div
      {...containerProps}
      className={twMerge(
        "px-6 pt-6 bg-white min-h-full flex flex-col justify-between ",
        containerProps.className
      )}
    >
      <div>
        <div
          {...headerProps}
          className={twMerge(
            `grid grid-cols-3 3xl:grid-cols-${columns.length} `,
            headerProps.className
          )}
        >
          {columns.map((column) => (
            <div
              key={column.name}
              className={twMerge(
                "text-[#8E95A9] text-[12px] lg:text-[14px] ",
                column.headerClassName
              )}
            >
              {column.headerName}
            </div>
          ))}
        </div>

        {!loading && secondaryLoading ? (
          <LinearLoading className="my-1" />
        ) : (
          <div className="h-[3px] my-1"></div>
        )}
        <div>
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <Loading />
            </div>
          ) : (
            rows.map((row) => (
              <div {...bodyProps} key={row?.id} className={bodyClassName}>
                {columns.map((column) =>
                  column.type === "actions" ? (
                    <div
                      key={column.name}
                      className={twMerge(
                        "text-[12px] lg:text-[14px] flex gap-x-2",
                        column.className
                      )}
                    >
                      {column.getCell && column.getCell(row)}
                    </div>
                  ) : (
                    <div
                      key={column.name}
                      className={twMerge(
                        "text-[#626670] text-[12px] lg:text-[14px]",
                        column.className
                      )}
                    >
                      {column.getCell ? column.getCell(row) : row[column.name]}
                    </div>
                  )
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <VendorPager
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Table;
