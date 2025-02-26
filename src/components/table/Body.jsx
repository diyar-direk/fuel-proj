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

  const changeLikeCheckBox = useCallback(
    (row) => {
      handleSelectRow(row)({
        target: {
          checked: !selectedRows.has(row.id),
        },
      });
    },
    [selectedRows, handleSelectRow]
  );

  const handleMouseEnter = useCallback(
    (row) => () => {
      if (rowMouseDown) {
        changeLikeCheckBox(row);
      }
    },
    [rowMouseDown, changeLikeCheckBox]
  );

  const handleMouseDown = useCallback(
    (row) => () => {
      changeLikeCheckBox(row);

      setRowMouseDown(true);
    },
    [changeLikeCheckBox]
  );

  const handleSelectArea = useCallback(
    (i) => {
      const currentRowId = rows?.[i]?.id;
      const isCurrRowSelected = selectedRows.has(currentRowId);

      if (!isCurrRowSelected) return "";

      const prevRowId = rows?.[i - 1]?.id;
      const isPrevRowSelected = selectedRows.has(prevRowId);

      const nextRowId = rows?.[i + 1]?.id;
      const isNextRowSelected = selectedRows.has(nextRowId);

      let style = `border-r-[3px] border-l-[3px] border-solid border-primary-main `;

      return (
        style +
        `${!isPrevRowSelected ? "border-t-[3px]" : ""} ${
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

  const handleCheckBoxChange = useCallback(
    (row) => (e) => {
      if (
        e.nativeEvent.pointerType === "mouse" ||
        e.nativeEvent.pointerType === "touch"
      )
        return;

      handleSelectRow(row)(e);
    },
    [handleSelectRow]
  );

  return (
    <div {...props}>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loading />
        </div>
      ) : (
        rows.map((row, i) => {
          const selectedRow = selectedRows.has(row.id);

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
                    checked={selectedRow}
                    className="w-5 h-5"
                    onChange={handleCheckBoxChange(row)}
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
