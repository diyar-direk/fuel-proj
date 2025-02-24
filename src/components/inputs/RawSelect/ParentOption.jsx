import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";

function ParentOption(
  {
    onClick = () => {},
    className = "",
    i,
    onSelectValue,
    disabled,
    selectedFocus = true,
    onKeyDown = () => {},
    selected,
    ...props
  },
  ref
) {
  const handleClick = useCallback(
    (e) => {
      if (disabled) return;
      onSelectValue(props, e);

      onClick(e);
    },
    [disabled, onSelectValue, onClick, props]
  );

  const optionRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      onKeyDown(e);
      switch (e.code.toLowerCase()) {
        case "enter":
          handleClick(e);
          break;
        default:
      }
    },
    [handleClick, onKeyDown]
  );

  useEffect(() => {
    /**
     * @type {HTMLDivElement}
     */
    const optionEl = optionRef.current;
    if (optionEl) {
      if (selected) {
        if (selectedFocus) {
          optionEl.focus();
        }
      }
    }
  }, [selected, selectedFocus]);

  const classNameMemo = useMemo(
    () =>
      twMerge(
        `px-2 py-1 w-full focus:border-[1px] border-black outline-none ${
          disabled
            ? "text-gray-500 hover:bg-none"
            : "hover:bg-primary-main hover:text-white "
        } ${selected ? "bg-primary-main text-white" : ""}`,
        className
      ),
    [disabled, selected, className]
  );

  return (
    <div
      {...props}
      className={classNameMemo}
      aria-selected={selected}
      tabIndex={disabled ? undefined : selected ? 0 : -1}
      aria-rowindex={i}
      ref={(el) => {
        optionRef.current = el;
        return ref;
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
}

export default memo(forwardRef(ParentOption));
