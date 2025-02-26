import { memo, useCallback, useEffect, useState } from "react";
import Loading from "../skeleton/Loading";
import Row from "./Row";
import BodyCell from "./BodyCell";
import LinearLoading from "../skeleton/LinearLoading";

function Body({
  loading,
  rows,
  columns,
  cellLength,
  bodyRowProps,
  handleSelectRow,
  selectedRows,
  selectable,
  secondaryLoading,
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
    <tbody {...props} className="relative">
      {!loading && secondaryLoading ? (
        <tr>
          <td>
            <LinearLoading className="absolute w-full h-[3px]" />
          </td>
        </tr>
      ) : (
        <tr>
          <td>
            <div className="h-[3px]"></div>
          </td>
        </tr>
      )}
      {loading ? (
        <tr>
          <td className="h-96">
            <div className="flex justify-center items-center absolute top-1/2 rtl:right-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-fit">
              <Loading />
            </div>
          </td>
        </tr>
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
                    className="w-5 h-5 max-lg:w-4 max-lg:h-4"
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
    </tbody>
  );
}
export default memo(Body);
