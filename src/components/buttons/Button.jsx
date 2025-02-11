import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef utils
 * @property {"contained"|"outlined"} variant
 * @property {"primary"|"danger"|"dark"} color
 * @property {boolean} submitting
 */

/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement> & utils} props
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

  return (
    <button
      disabled={processedDisabled}
      className={twMerge(
        `${variant}-${
          processedDisabled ? "disabled" : color
        } btn py-2 px-4 w-full`,
        `${className}`
      )}
      {...otherProps}
    >
      {submitting ? "Submitting..." : children}
    </button>
  );
}
export default Button;
