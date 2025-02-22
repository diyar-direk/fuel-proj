import { memo, useCallback, useMemo } from "react";
import { ReactComponent as TriangleDownIcon } from "src/assets/icons/triangle-down.svg";
import { twMerge } from "tailwind-merge";
/**
 * @typedef sortStatus
 * @type {"ASC"|"DESC"|null}
 */

/**
 * @typedef utils
 * @property {sortStatus} sortStatus
 * @property {(sortStatus:sortStatus,e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void} onClick
 */

/**
 * @typedef sortButtonProps
 * @type {React.HTMLAttributes<HTMLButtonElement> & utils}
 */

/**
 * @param {sortButtonProps} props
 */
function SortButton({ sortStatus, className, onClick, ...props }) {
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

  const handleSortClick = useCallback(
    (e) => {
      onClick(sortStatus === "ASC" ? "DESC" : "ASC", e);
    },
    [onClick, sortStatus]
  );

  const classNameMemo = useMemo(() => twMerge(`mt-1`, className), [className]);

  return (
    <button onClick={handleSortClick} className={classNameMemo} {...props}>
      <TriangleDownIcon
        className={`w-4 h-4 duration-150 ${handleSortStatusStyle(sortStatus)}`}
      />
    </button>
  );
}

export default memo(SortButton);
