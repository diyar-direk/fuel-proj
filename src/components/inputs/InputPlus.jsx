import { memo } from "react";
import Skeleton from "../Skeleton/Skeleton";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import { twMerge } from "tailwind-merge";
import SelectApi from "./SelectApi";

/**
 * @typedef utils
 * @property {string} title
 * @property {React.JSX.Element} titleIcon
 * @property {boolean} loading
 * @property {React.HTMLAttributes<HTMLDivElement>} inputPlusContainerProps
 * @property {import("../Skeleton/Skeleton").skeletonProps} skeletonProps
 * @property {React.HTMLAttributes<HTMLDivElement>} titleProps
 */

/**
 * @typedef inputPlusProps
 * @type {React.InputHTMLAttributes<HTMLInputElement> & import("./Input").utils & utils}
 */

/**
 *  @param {inputPlusProps} props
 */
function InputPlus(props) {
  const {
    title,
    titleIcon,
    loading,
    inputPlusContainerProps = {},
    skeletonProps = {},
    titleProps = {},
    ...inputProps
  } = props;

  return (
    <div
      {...inputPlusContainerProps}
      className={twMerge(
        "flex flex-col gap-4",
        inputPlusContainerProps.className
      )}
    >
      <h2
        {...titleProps}
        className={twMerge(
          "text-[14px] lg:text-[20px] font-semibold flex gap-1",
          titleProps.className
        )}
      >
        <label htmlFor={props.id}>{title}</label>
        {titleIcon}
      </h2>
      {loading ? (
        <Skeleton {...skeletonProps} />
      ) : inputProps.type === "select" ? (
        <Select {...inputProps} />
      ) : inputProps.type === "textarea" ? (
        <TextArea {...inputProps} />
      ) : inputProps.type === "selectApi" ? (
        <SelectApi {...inputProps} />
      ) : (
        <Input {...inputProps} />
      )}
    </div>
  );
}

export default memo(InputPlus);
