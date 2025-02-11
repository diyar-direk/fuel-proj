import { memo } from "react";
import { twMerge } from "tailwind-merge";

function TextArea(props = { className: "", helperText: "" }) {
  const {
    newClassName,
    helperTextProps = { className: "" },
    containerProps = { className: "" },
    error,
    helperText,
    ...otherProps
  } = props;
  const { newClassNameContainer, ...otherContainerProps } = containerProps;
  const { newClassNameHelperText, ...otherHelperTextProps } = helperTextProps;
  return (
    <div
      {...otherContainerProps}
      className={otherContainerProps.className + " w-full"}
      {...(newClassNameContainer ? { className: newClassNameContainer } : {})}
    >
      <textarea
        {...otherProps}
        className={twMerge(
          ` min-h-[100px] w-full rounded-lg indent-1 border-black p-1 border-[1px] ${
            props.helperText ? "border-danger-main" : ""
          }`,
          `${otherProps.className || ""} ${props.disabled ? "opacity-60" : ""}`
        )}
        {...(newClassName ? { className: newClassName } : {})}
      />
      <p
        {...otherHelperTextProps}
        className={
          (error && "text-red-600 ") +
          otherHelperTextProps.className +
          " text-sm"
        }
        {...(newClassNameHelperText
          ? { className: newClassNameHelperText }
          : {})}
      >
        {helperText}
      </p>
    </div>
  );
}
export default memo(TextArea);
