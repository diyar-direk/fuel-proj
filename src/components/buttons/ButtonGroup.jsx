import { memo, useCallback, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { EventTarget } from "../../utils/EventTarget";
import ButtonOption from "./ButtonOption";

/**
 * @typedef buttonProps
 * @type {import("./Button").buttonProps}
 */

/**
 * @typedef optionUtils
 * @property {any} value
 * @property {string} label
 * @property {React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string;}>} Icon
 * @property {buttonProps['color']} color
 * @property {buttonProps['variant']} variant
 */

/**
 * @typedef option
 * @type {optionUtils & buttonProps}
 */

/**
 * @typedef utils
 * @property {buttonProps['color']} buttonColor
 * @property {buttonProps['variant']} buttonVariant
 * @property {(e:EventTarget)=>{}} onChange
 * @property {any} activeValue
 * @property {string} buttonClassName
 * @property {string} activeButtonClassName
 * @property {string} iconClassName
 * @property {string} activeIconClassName
 * @property {number} overlapSpacing - overlapSpacing (the default: 45px)
 * @property {option[]} options
 * @property {React.HTMLAttributes<HTMLDivElement>} containerProps
 */

/**
 * @typedef buttonGroupProps
 * @type {utils}
 */

/**
 * @param {buttonGroupProps} props
 */
function ButtonGroup({
  options = [],
  activeValue,
  onChange,
  buttonColor = "primary",
  buttonSecondaryColor = "secondary",
  buttonVariant = "contained",
  buttonClassName = "",
  activeButtonClassName = "",
  iconClassName = "fill-gray-main",
  activeIconClassName = "fill-white",
  overlapSpacing = 45,
  containerProps = { className: "" },
}) {
  const handleClick = useCallback(
    (name, value) => () => {
      onChange(new EventTarget(name, value));
    },
    [onChange]
  );

  const containerClassNameMemo = useMemo(
    () => twMerge("flex max-sm:w-full", containerProps.className),
    [containerProps.className]
  );

  return (
    <div {...containerProps} className={containerClassNameMemo}>
      {options.map(
        (
          { value, label, ...option } = {
            className: "",
          },
          index
        ) => (
          <ButtonOption
            key={value}
            active={activeValue === value}
            index={index}
            {...option}
            onClick={handleClick(option.name, value)}
            activeButtonClassName={activeButtonClassName}
            activeIconClassName={activeIconClassName}
            buttonClassName={buttonClassName}
            buttonColor={buttonColor}
            buttonSecondaryColor={buttonSecondaryColor}
            buttonVariant={buttonVariant}
            iconClassName={iconClassName}
            overlapSpacing={overlapSpacing}
          >
            {label}
          </ButtonOption>
        )
      )}
    </div>
  );
}
export default memo(ButtonGroup);
