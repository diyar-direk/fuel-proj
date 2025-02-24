import React, { memo } from "react";
import Row from "./Row";
import HeaderCell from "./HeaderCell";
import SortButton from "../buttons/SortButton";

function Head({
  handleSortClick,
  sortStatuses,
  handleSelectRow,
  selectAll,
  columns,
  className,
  cellLength,
  selectable,
  ...props
}) {
  return (
    <Row
      {...props}
      cellLength={cellLength}
      className={"bg-primary-light " + className}
    >
      {selectable && (
        <HeaderCell>
          <input
            type="checkbox"
            onChange={handleSelectRow()}
            name="selectAll"
            checked={Boolean(selectAll)}
            className="w-5 h-5"
            id="selectAll"
          />
        </HeaderCell>
      )}
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
  );
}

export default memo(Head);
