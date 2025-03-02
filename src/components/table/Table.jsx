import React, { useCallback } from "react";
import Pagination from "../pagination/Pagination";
import Container from "./Container";
import Body from "./Body";
import Head from "./Head";

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
 * @typedef headerCellProps
 * @type {import('./HeaderCell').headerCellProps}
 */

/**
 * @typedef bodyCellProps
 * @type {import("./BodyCell").bodyCellProps}
 */

/**
 * @typedef column
 * @type {object}
 * @property {string} name - must be unique
 * @property {string} headerName
 * @property {getCell} getCell
 * @property {string} className - (header and body) cells className
 * @property {type} type
 * @property {boolean} sort
 * @property {headerCellProps} headerCellProps - header cell props
 * @property {bodyCellProps} bodyCellProps - body cell props
 * @property {bodyCellProps|headerCellProps} props - (header and body) cells props
 */
/**
 * @typedef utils
 * @property {column[]} columns
 * @property {[]} rows
 * @property {number} currentPage
 * @property {number} totalPages
 * @property {function} onPageChange
 * @property {React.HTMLAttributes<HTMLDivElement>} containerProps
 * @property {React.HTMLAttributes<HTMLTableSectionElement>} headProps
 * @property {React.HTMLAttributes<HTMLTableSectionElement>} bodyProps
 * @property {boolean} loading
 * @property {boolean} secondaryLoading
 * @property {object} sortStatuses
 * @property {(name:string, sortStatus:sortStatus)=>void} onSortChange
 * @property {(selectedRows:Set<number>)=>void} onSelectRows
 * @property {Set<number>} selectedRows
 * @property {boolean} selectable
 * @property {number} maxVisibleNeighbors - Number of neighbors to show on each side of the current page (the default: 2)
 * @property {import("./Row").rowProps} bodyRowProps
 * @property {import("./Row").rowProps} headRowProps
 * @property {headerCellProps} headerCellsProps - all header cells props
 * @property {bodyCellProps} bodyCellsProps - all body cells props
 * @property {headerCellProps} headerCheckboxCellProps
 * @property {bodyCellProps} bodyCheckboxCellProps
 * @property {headerCellProps|bodyCellProps} checkboxCellProps - all (body and header) checkbox cells props
 * @property {headerCellProps|bodyCellProps} cellsProps - all (body and header) cells props
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
    headProps = { className: "" },
    bodyProps = { className: "" },
    loading,
    secondaryLoading,
    sortStatuses,
    onSortChange = () => {},
    onSelectRows = () => {},
    selectedRows,
    selectable,
    maxVisibleNeighbors = 2,
    bodyRowProps,
    headRowProps,
    headerCellsProps,
    bodyCellsProps,
    headerCheckboxCellProps,
    bodyCheckboxCellProps,
    cellsProps,
    checkboxCellProps,
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

  const handleSelectRow = useCallback(
    (row) =>
      /**
       * @param {React.ChangeEvent<HTMLInputElement>} e
       */
      (e) => {
        const name = e.target.name;
        const checked = e.target.checked;

        if (name === "selectAll") {
          if (checked) {
            const newSelectedRows = new Set();

            rows.forEach((row) => {
              newSelectedRows.add(row.id);
            });

            onSelectRows(newSelectedRows);
          } else {
            onSelectRows(new Set());
          }

          return;
        }
        const newSelectedRows = new Set(selectedRows);

        if (checked) {
          newSelectedRows.add(row.id);
        } else {
          newSelectedRows.delete(row.id);
        }

        onSelectRows(newSelectedRows);
      },
    [rows, onSelectRows, selectedRows]
  );

  const selectAll = rows.length ? selectedRows.size === rows.length : false;

  return (
    <Container {...containerProps}>
      <div className="overflow-x-auto w-full max-w-full">
        <table className="w-full min-w-max table-auto border-collapse relative">
          <Head
            columns={columns}
            handleSelectRow={handleSelectRow}
            handleSortClick={handleSortClick}
            selectAll={selectAll}
            sortStatuses={sortStatuses}
            selectable={selectable}
            headRowProps={headRowProps}
            headerCellsProps={headerCellsProps}
            headerCheckboxCellProps={headerCheckboxCellProps}
            cellsProps={cellsProps}
            checkboxCellProps={checkboxCellProps}
            {...headProps}
          />
          <Body
            secondaryLoading={secondaryLoading}
            columns={columns}
            bodyRowProps={bodyRowProps}
            handleSelectRow={handleSelectRow}
            loading={loading}
            rows={rows}
            selectedRows={selectedRows}
            selectable={selectable}
            bodyCellsProps={bodyCellsProps}
            bodyCheckboxCellProps={bodyCheckboxCellProps}
            cellsProps={cellsProps}
            checkboxCellProps={checkboxCellProps}
            {...bodyProps}
          />
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
        maxVisibleNeighbors={maxVisibleNeighbors}
      />
    </Container>
  );
}

export default Table;
