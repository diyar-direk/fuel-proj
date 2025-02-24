import { memo, useMemo } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

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
 * @property {React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string;}>} Icon
 * @property {boolean} active
 */

/**
 * @typedef buttonOptionProps
 * @type {React.ButtonHTMLAttributes<HTMLButtonElement> & utils}
 */

/**
 * @param {buttonOptionProps} props
 */
function ButtonOption({
  className = "",
  Icon,
  children,
  iconClassName,
  active,
  activeIconClassName,
  activeButtonClassName,
  style,
  index,
  overlapSpacing,
  buttonClassName,
  buttonVariant,
  color,
  buttonColor,
  buttonSecondaryColor,
  variant,
  ...props
}) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        `w-full flex gap-x-2 px-14 justify-center items-center transition-all `,
        `${buttonClassName} ${className} ${
          active ? `z-[100] ${activeButtonClassName}` : `z-${20 + index * 10}`
        }  `
      ),
    [index, buttonClassName, className, active, activeButtonClassName]
  );

  return (
    <Button
      color={active ? color || buttonColor : buttonSecondaryColor}
      variant={variant || buttonVariant}
      className={classNameMemo}
      style={{
        borderRadius: "2rem",
        [document.body.dir === "rtl" ? "marginRight" : "marginLeft"]: `-${
          overlapSpacing * index
        }px`,
        ...style,
      }}
      {...props}
    >
      {Icon && (
        <Icon className={`${active ? activeIconClassName : iconClassName}`} />
      )}
      {active && children}
    </Button>
  );
}

export default memo(ButtonOption);
