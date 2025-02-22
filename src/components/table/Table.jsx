import React, { useCallback } from "react";
import Pagination from "../pagination/Pagination";
import LinearLoading from "../skeleton/LinearLoading";
import Container from "./Container";
import Body from "./Body";
import Head from "./Head";

/**
 * @callback getCell
 * @param {object} row
 */

/**
 * @typedef selectedRows
 * @property {boolean} selectAll
 * @property {{[id:number]:row}} selectedRows
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
 * @property {(selectedRows:selectedRows)=>void} onSelectRows
 * @property {selectedRows} selectedRows
 * @property {boolean} selectable
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
    onSelectRows = () => {},
    selectedRows,
    selectable,
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
            onSelectRows({
              selectAll: true,
              selectedRows: Object.fromEntries(
                rows.map((row) => [row.id, row])
              ),
            });
          } else {
            onSelectRows({ selectAll: false, selectedRows: {} });
          }

          return;
        }
        const newSelectedRows = {
          ...(selectedRows.selectedRows || {}),
        };

        if (checked) {
          newSelectedRows[row.id] = row;
        } else {
          delete newSelectedRows[row.id];
        }

        onSelectRows({
          selectAll: Object.keys(newSelectedRows).length === rows.length,
          selectedRows: newSelectedRows,
        });
      },
    [rows, onSelectRows, selectedRows]
  );

  const cellLength = columns.length + (selectable ? 1 : 0);

  return (
    <Container {...containerProps}>
      <div>
        <Head
          {...headerProps}
          cellLength={cellLength}
          columns={columns}
          handleSelectRow={handleSelectRow}
          handleSortClick={handleSortClick}
          selectAll={selectedRows.selectAll}
          sortStatuses={sortStatuses}
          selectable={selectable}
        />
        {!loading && secondaryLoading ? (
          <LinearLoading />
        ) : (
          <div className="h-[3px]"></div>
        )}
        <Body
          columns={columns}
          bodyRowProps={bodyProps}
          cellLength={cellLength}
          handleSelectRow={handleSelectRow}
          loading={loading}
          rows={rows}
          selectedRows={selectedRows.selectedRows}
          selectable={selectable}
        />
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
