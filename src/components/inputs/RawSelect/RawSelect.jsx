import React, {
  Children,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg";
import { EventTarget } from "../../../utils/EventTarget";
import ParentOption from "./ParentOption";

const openSelectStatus = ["enter", "space", "arrowdown", "arrowup"];

/**
 * @typedef utils
 * @property {any} value
 * @property {React.HTMLAttributes<HTMLDivElement>} optionsContainer
 */

/**
 * @typedef rawSelectProps
 * @type {React.SelectHTMLAttributes<HTMLSelectElement> & utils}
 */

/**
 * @param {rawSelectProps} props
 */
function RawSelect({
  children,
  className = "",
  onBlur = () => {},
  onClick = () => {},
  onChange = () => {},
  name,
  value: externalValue,
  optionsContainer = { className: "" },
  disabled,
  ...props
}) {
  const [openDrop, setOpenDrop] = useState(false);
  const [options, setOptions] = useState({});
  const [value, setValue] = useState(() => new ValueOptionDto({}));
  const selectRef = useRef(null);

  const handleOpenDrop = useCallback(() => {
    setOpenDrop(true);
  }, []);

  const handleClick = useCallback(
    (e) => {
      if (disabled) return;

      if (!openDrop) {
        handleOpenDrop();
      }
      onClick(e);
    },
    [onClick, openDrop, handleOpenDrop, disabled]
  );

  const handleCloseDrop = useCallback(() => {
    setOpenDrop(false);
  }, []);

  const handleValue = useCallback(
    /**
     *
     * @param {ValueOptionDto} value
     */
    (value) => {
      setValue(new ValueOptionDto(value));
    },
    []
  );

  const handleSelectValue = useCallback(
    /**
     *
     * @param {ValueOptionDto} value
     */
    (value) => {
      onChange(new EventTarget(name, value.value));
      handleCloseDrop();
      selectRef.current.focus();
    },
    [handleCloseDrop, name, onChange]
  );

  const handleSelectKeyDown = useCallback(
    (e) => {
      const code = e.code.toLowerCase();
      if (openSelectStatus.includes(code)) {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  const handleOptionsKeyDown = useCallback(
    (e) => {
      const currentTarget = e.currentTarget;
      const currentOption = e.target;

      switch (e.code.toLowerCase()) {
        case "arrowdown":
          const nextOptionIndex = currentTarget.childNodes.item(
            +currentOption.ariaRowIndex + 1
          );

          if (nextOptionIndex) {
            nextOptionIndex.focus();
          } else {
            currentTarget.firstChild.focus();
          }
          break;
        case "arrowup":
          const previousOptionIndex = currentTarget.childNodes.item(
            +currentOption.ariaRowIndex - 1
          );

          if (previousOptionIndex) {
            previousOptionIndex.focus();
          } else {
            currentTarget.lastChild.focus();
          }
          break;
        case "escape":
          selectRef.current.focus();
          handleCloseDrop();

          break;
        default:
      }
    },
    [handleCloseDrop]
  );

  // Load selected value

  const refreshOptions = useCallback(
    (children) => {
      setOptions(
        Object.fromEntries(
          children.map(({ props }) => [props.value, props.children])
        )
      );
    },
    [setOptions]
  );

  useEffect(() => {
    if (externalValue !== value.value) {
      const selectedOption = options[externalValue];

      if (selectedOption) {
        handleValue(
          new ValueOptionDto({ children: selectedOption, value: externalValue })
        );
      }
    }
  }, [externalValue, handleValue, value.value, options]);

  // Load children options
  useEffect(() => {
    if (children) {
      refreshOptions(Array.isArray(children) ? children : [children]);
    }
  }, [children, refreshOptions]);

  // Select first option
  useEffect(() => {
    if (children && value.value === null) {
      const firstChildrenProps = Children.toArray(children)[0].props;

      handleValue(new ValueOptionDto(firstChildrenProps));
    }
  }, [children, value.value, handleValue]);

  useEffect(() => {
    /**
     * @param {MouseEvent} e
     */
    const handleMouseClickOutside = (e) => {
      if (selectRef.current) {
        if (!selectRef.current.contains(e.target)) {
          handleCloseDrop();
        }
      }
    };
    document.addEventListener("mousedown", handleMouseClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleMouseClickOutside);
  }, [handleCloseDrop]);

  return (
    <div
      className={twMerge(
        `border-[1px] border-black ${
          disabled ? `opacity-60` : `focus:border-[2px]`
        } h-7 rounded-md relative w-max select-none `,
        className
      )}
      ref={selectRef}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleSelectKeyDown}
      {...props}
    >
      <div className="flex justify-between items-center px-1 h-full">
        <div className="pl-1 pr-2">{value.children}</div>
        <ArrowDown />
      </div>
      {openDrop && (
        <div
          onKeyDown={handleOptionsKeyDown}
          {...optionsContainer}
          className={twMerge(
            "max-h-64 absolute z-50 w-full overflow-y-auto overflow-x-hidden bg-white border-[1px] border-black",
            optionsContainer.className
          )}
        >
          {Children.map(children, (child, i) => {
            const selected = value.value === child.props.value;
            return (
              <ParentOption
                {...child.props}
                i={i}
                selected={selected}
                onSelectValue={handleSelectValue}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default memo(RawSelect);

export class ValueOptionDto {
  constructor({ value = null, children = null }) {
    this.value = value;
    this.children = children;
  }
}
