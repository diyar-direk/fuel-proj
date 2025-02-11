import { memo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef helperTextUtils
 * @property {string} newClassName
 */

/**
 * @typedef containerUtils
 * @property {string} newClassName
 */

/**
 * @typedef utils
 * @property {string} newClassName
 * @property {string} helperText
 * @property {boolean} error
 * @property {React.HTMLAttributes<HTMLDivElement> & containerUtils } containerProps
 * @property {React.HTMLAttributes<HTMLParagraphElement> & helperTextUtils} helperTextProps
 */

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement> & utils} props
 */
function Input(props = { className: "", helperText: "" }) {
  const {
    helperTextProps = { className: "" },
    containerProps = { className: "" },
    newClassName,
    error,
    helperText,
    ...otherProps
  } = props;
  const { newClassName: newClassNameContainer, ...otherContainerProps } =
    containerProps;
  const { helperTextNewClassName, ...otherHelperTextProps } = helperTextProps;

  return (
    <div
      {...otherContainerProps}
      className={twMerge(" w-full", otherContainerProps.className)}
      {...(newClassNameContainer ? { className: newClassNameContainer } : {})}
    >
      <input
        {...otherProps}
        className={twMerge(
          ` w-full rounded-lg indent-1 border-black p-1 border-[1px] ${
            props.helperText ? "border-danger-main" : ""
          }`,
          `${otherProps.className || ""} ${props.disabled ? "opacity-60" : ""}`
        )}
        {...(newClassName ? { className: newClassName } : {})}
      />
      <p
        {...otherHelperTextProps}
        className={twMerge(
          (error && "text-danger-main ") + " text-sm",
          otherHelperTextProps.className
        )}
        {...(helperTextNewClassName
          ? { className: helperTextNewClassName }
          : {})}
      >
        {helperText}
      </p>
    </div>
  );
}

export default memo(Input);
