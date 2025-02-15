import { memo, useCallback } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { EventTarget } from "../../utils/EventTarget";

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

  return (
    <div
      {...containerProps}
      className={twMerge("flex max-sm:w-full", containerProps.className)}
    >
      {options.map(
        (
          {
            value,
            color,
            variant,
            Icon,
            style,
            className,
            label,
            ...option
          } = {
            className: "",
          },
          index
        ) => (
          <Button
            key={value}
            color={
              activeValue === value
                ? color || buttonColor
                : buttonSecondaryColor
            }
            variant={variant || buttonVariant}
            className={twMerge(
              `w-full flex gap-x-2 px-14 justify-center items-center transition-all `,
              `${buttonClassName} ${className} ${
                activeValue === value
                  ? `z-[100] ${activeButtonClassName}`
                  : `z-${20 + index * 10}`
              }  `
            )}
            style={{
              borderRadius: "2rem",
              [document.body.dir === "rtl" ? "marginRight" : "marginLeft"]: `-${
                overlapSpacing * index
              }px`,
              ...style,
            }}
            onClick={handleClick(option.name, value)}
            {...option}
          >
            {Icon && (
              <Icon
                className={`${
                  activeValue === value ? activeIconClassName : iconClassName
                }`}
              />
            )}
            {activeValue === value && label}
          </Button>
        )
      )}
    </div>
  );
}
export default memo(ButtonGroup);
