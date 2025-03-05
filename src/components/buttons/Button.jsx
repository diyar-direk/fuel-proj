import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef utils
 * @property {"contained"|"outlined"} variant
 * @property {"primary"|"secondary"|"danger"|"dark"} color
 * @property {boolean} submitting
 */

/**
 * @typedef buttonProps
 * @type {React.ButtonHTMLAttributes<HTMLButtonElement> & utils}
 */

/**
 * @param {buttonProps} props
 */
function Button(props) {
  const {
    className = "",
    color = "primary",
    variant = "contained",
    children,
    submitting,
    disabled = submitting,
    ...otherProps
  } = props;
  const processedDisabled = submitting || disabled;
  const classNameMemo = useMemo(
    () =>
      twMerge(
        `${
          buttonTheme[variant][processedDisabled ? "disabled" : color]
        }  rounded-lg transition-all duration-150 ease-in-out text-[12px] lg:text-[16px] py-2 max-lg:py-0.5 px-4 w-full`,
        `${className}`
      ),
    [className, variant, processedDisabled, color]
  );

  return (
    <button
      disabled={processedDisabled}
      className={classNameMemo}
      {...otherProps}
    >
      {submitting ? "Submitting..." : children}
    </button>
  );
}
export default Button;

const disabled = "text-white bg-[#888] border-[#888] opacity-60";

const buttonTheme = {
  contained: {
    primary: "text-white bg-primary-main hover:bg-primary-dark",
    secondary: "text-black bg-secondary-main hover:bg-dark-dark",
    danger: "text-white bg-danger-main hover:bg-danger-dark",
    dark: "text-white bg-black hover:bg-dark-light",
    disabled,
  },
  outlined: {
    primary:
      "text-primary-main border-primary-main border-[1px] hover:bg-primary-light",
    secondary:
      "text-secondary-secondary border-secondary-secondary border-[1px] hover:bg-secondary-main",
    danger:
      "text-danger-main border-danger-main border-[1px] hover:bg-danger-light",
    dark: "text-black border-black border-[1px]  hover:bg-dark-dark",
    disabled,
  },
};
