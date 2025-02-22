import { memo, useCallback, useEffect, useState } from "react";
import Loading from "../skeleton/Loading";
import Row from "./Row";
import BodyCell from "./BodyCell";

function Body({
  loading,
  rows,
  columns,
  cellLength,
  bodyRowProps,
  handleSelectRow,
  selectedRows,
  selectable,
  ...props
}) {
  const [rowMouseDown, setRowMouseDown] = useState(false);
  const handleMouseEnter = useCallback(
    (row) => () => {
      if (rowMouseDown) {
        handleSelectRow(row)({
          target: {
            checked: selectedRows?.[row.id] ? false : true,
          },
        });
      }
    },
    [rowMouseDown, handleSelectRow, selectedRows]
  );

  const handleMouseDown = useCallback(
    (row) => () => {
      handleSelectRow(row)({
        target: {
          checked: selectedRows?.[row.id] ? false : true,
        },
      });
      setRowMouseDown(true);
    },
    [handleSelectRow, selectedRows]
  );

  const handleSelectArea = useCallback(
    (i) => {
      const isCurrRowSelected = selectedRows?.[rows?.[i]?.id];

      if (!isCurrRowSelected) return "";

      const isPrevRowSelected = Boolean(selectedRows?.[rows?.[i - 1]?.id]);

      const isNextRowSelected = Boolean(selectedRows?.[rows?.[i + 1]?.id]);

      let style = `border-r-[3px] border-l-[3px] border-solid border-primary-main`;

      return (
        style +
        ` ${!isPrevRowSelected ? "border-t-[3px]" : ""} ${
          !isNextRowSelected ? "border-b-[3px]" : ""
        } `
      );
    },
    [rows, selectedRows]
  );

  useEffect(() => {
    const handleMouseUp = () => {
      setRowMouseDown(false);
    };
    window.addEventListener("mouseup", handleMouseUp);

    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div {...props}>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loading />
        </div>
      ) : (
        rows.map((row, i) => {
          const selectedRow = selectedRows?.[row.id];

          return (
            <Row
              {...bodyRowProps}
              key={row.id}
              cellLength={cellLength}
              className={
                ((i & 1) === 1 ? "bg-primary-light " : "bg-secondary-main") +
                bodyRowProps.className +
                "  " +
                handleSelectArea(i)
              }
            >
              {selectable && (
                <BodyCell
                  onMouseEnter={handleMouseEnter(row)}
                  onMouseDown={handleMouseDown(row)}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(selectedRow)}
                    className="w-5 h-5"
                    readOnly
                  />
                </BodyCell>
              )}
              {columns.map((column) => (
                <BodyCell
                  key={column.name}
                  className={column.className + " select-text"}
                >
                  {column.getCell ? column.getCell(row) : row[column.name]}
                </BodyCell>
              ))}
            </Row>
          );
        })
      )}
    </div>
  );
}
export default memo(Body);
