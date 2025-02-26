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
        <HeaderCell className="w-20">
          <input
            type="checkbox"
            onChange={handleSelectRow()}
            name="selectAll"
            checked={Boolean(selectAll)}
            className="w-5 h-5 max-lg:w-4 max-lg:h-4"
            id="selectAll"
          />
        </HeaderCell>
      )}
      {columns.map((column) => (
        <HeaderCell key={column.name}>
          <div className="flex items-center justify-center">
            {column.headerName}
            {column.sort && (
              <SortButton
                className="mt-0"
                onClick={handleSortClick(column)}
                sortStatus={sortStatuses[column.name]}
              />
            )}
          </div>
        </HeaderCell>
      ))}
    </Row>
  );
}

export default memo(Head);
