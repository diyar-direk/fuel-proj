import React, { useCallback } from "react";
import Pagination from "../pagination/Pagination";
import Loading from "../skeleton/Loading";
import LinearLoading from "../skeleton/LinearLoading";
import Row from "./Row";
import HeaderCell from "./HeaderCell";
import SortButton from "../buttons/SortButton";
import BodyCell from "./BodyCell";
import Container from "./Container";

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
    (column) => (sortStatus) => {
      onSortChange(column.name, sortStatus);
    },
    [onSortChange]
  );

  const cellLength = columns.length;

  return (
    <Container {...containerProps}>
      <div>
        <Row
          {...headerProps}
          cellLength={cellLength}
          className={"bg-primary-light " + headerProps.className}
        >
          {columns.map((column) => (
            <HeaderCell key={column.name}>
              {column.headerName}
              {column.sort && (
                <SortButton
                  onClick={handleSortClick(column)}
                  sortStatus={sortStatuses[column.name]}
                />
              )}
            </HeaderCell>
          ))}
        </Row>
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
              <Row
                {...bodyProps}
                key={row?.id}
                cellLength={cellLength}
                className={
                  ((i & 1) === 1 ? "bg-primary-light" : "bg-secondary-main") +
                  bodyProps.className
                }
              >
                {columns.map((column) => (
                  <BodyCell key={column.name} className={column.className}>
                    {column.getCell ? column.getCell(row) : row[column.name]}
                  </BodyCell>
                ))}
              </Row>
            ))
          )}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </Container>
  );
}

export default Table;
