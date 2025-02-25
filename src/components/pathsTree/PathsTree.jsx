import { memo, useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Arrow from "./Arrow";
import { isBeforeLastIndex } from "src/utils/isBeforeLastIndex";

/**
 * @typedef utils
 * @property {(selected:boolean)=>void|any} title
 * @property {utils[]} children
 * @property {number} arrowHeight - arrowHeight (the default: 40)
 * @property {React.Ref<HTMLDivElement> | undefined} ref
 * @property {import("./Arrow").arrowProps} arrowProps
 * @property {import("./Arrow").borderStyle} borderStyle
 * @property {object} openStore
 * @property {function} setOpenStore
 * @property {any} value
 * @property {(value:any)=>void} onChange
 * @property {any} selectedValue
 */

/**
 * @typedef showSchemaProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */
/**
 * @param {showSchemaProps} props
 */
function PathsTree({
  className,
  title,
  children = [],
  arrowHeight = 40,
  style = {},
  ref,
  depth = 0,
  i = 0,
  openStore = {},
  setOpenStore,
  arrowProps,
  borderStyle = "border-dashed",
  onChange = () => {},
  value,
  selectedValue,
  ...props
}) {
  const openIndex = `${depth}${i}`;

  const [open, setOpen] = useState(() => {
    let open = openStore[openIndex];

    if (typeof open !== "boolean") {
      return true;
    }

    return open;
  });

  const classNameMemo = useMemo(
    () =>
      twMerge(
        `flex flex-col border-solid max-md:mt-[10px] relative`,
        className
      ),
    [className]
  );

  const handleToggle = useCallback(() => {
    setOpen(!open);

    if (setOpenStore) {
      setOpenStore({
        [openIndex]: !open,
      });
    }
  }, [setOpenStore, openIndex, open]);

  const childrenLength = children.length;

  const lastChild = children[childrenLength - 1];

  const lastChildHasChildren = lastChild?.children?.length > 0;
  const isSelected = value === selectedValue;

  return (
    <div
      className={classNameMemo}
      style={{ marginTop: `${arrowHeight * 0.5}px`, ...style }}
      ref={ref}
      {...props}
    >
      <span
        className={`text-sm min-w-max max-md:text-xs cursor-pointer hover:text-primary-main relative top-2 z-10 select-none ${
          isSelected ? "text-primary-dark font-bold" : ""
        } `}
        onDoubleClick={handleToggle}
        onClick={() => {
          onChange(value);
        }}
      >
        {typeof title === "function" ? title(isSelected) : title}
        {!open && childrenLength ? <div className="text-end">....</div> : <></>}
      </span>
      <div
        className={`mr-6 max-md:mr-4 relative top-2 ${
          open && !lastChildHasChildren
            ? "border-r-2 border-primary-main rounded-br-xl"
            : ""
        } ${borderStyle}`}
      >
        {open ? (
          children.map(({ arrowProps, ...props }, i) => (
            <div
              className={`flex gap-0.5 ${
                lastChildHasChildren && isBeforeLastIndex(i, childrenLength)
                  ? "border-r-2 border-primary-main -mr-[1px]"
                  : ""
              } ${borderStyle}`}
              key={i}
            >
              <Arrow
                borderStyle={borderStyle}
                {...arrowProps}
                arrowHeight={arrowHeight}
              />
              <PathsTree
                {...props}
                arrowHeight={arrowHeight}
                i={i}
                depth={depth + 1}
                setOpenStore={setOpenStore}
                openStore={openStore}
                onChange={onChange}
                selectedValue={selectedValue}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default memo(PathsTree);
