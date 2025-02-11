import React, { memo, useCallback, useEffect, useState } from "react";
import { EventTarget } from "../../utils/EventTarget";
import Skeleton from "../skeleton/Skeleton";
import Input from "../Inputs/Input";
import uploadBlueIcon from "./../../assets/icons/upload-blue.png";
import uploadGrayIcon from "./../../assets/icons/upload-gray.png";
import { FileURL } from "../../utils/FileURL";

function UploadFile({
  onChange = () => {},
  title = "",
  loading,
  error,
  name = "",
  helperText,
  value,
  accept = "image/png, image/jpeg",
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = useCallback(
    ({ target }) => {
      const name = target.name;
      const file = target.files[0];

      onChange(new EventTarget(name, new FileURL(file)));
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      const name = e.currentTarget.htmlFor;

      onChange(new EventTarget(name, new FileURL(file)));
    },
    [onChange]
  );

  const handleRemove = useCallback(() => {
    onChange(new EventTarget(name, new FileURL(null)));
  }, [onChange, name]);

  useEffect(() => {
    if (!value?.file) {
      setIsDragging(false);
    }
    return () => {
      URL.revokeObjectURL(value?.url);
    };
  }, [value]);

  const handleDragEnter = useCallback(() => {
    setIsDragging(true);
  }, [setIsDragging]);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
    },
    [setIsDragging]
  );

  return (
    <div>
      <h1 className="text-lg">{title}</h1>
      {loading ? (
        <Skeleton className="h-[320px] " />
      ) : (
        <div className="flex flex-col gap-2 ">
          <div className="relative overflow-visible flex flex-col gap-6 border-dashed border-black border-[1px] rounded-lg ">
            {value?.url && (
              <button
                onClick={handleRemove}
                className="absolute -top-1 z-30 -right-1 bg-danger-main text-white rounded-full w-4 h-4 flex items-center justify-center text-sm"
              >
                x
              </button>
            )}
            <label
              htmlFor={name + (value?.url ? "disabled" : "")}
              className="cursor-pointer relative "
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {value?.url ? (
                <>
                  <img
                    className={`absolute w-full h-[320px] object-cover opacity-50 blur-sm z-[1] rounded-lg`}
                    src={value?.url || null}
                    alt=""
                  />
                  <img
                    className={`relative w-full h-[320px] object-contain z-[2] rounded-lg`}
                    src={value?.url || null}
                    alt=""
                  />
                </>
              ) : (
                <div
                  className={`w-full h-[320px] flex flex-col justify-center items-center  hover:bg-dark-dark rounded-lg ${
                    isDragging ? "bg-dark-dark" : ""
                  }`}
                >
                  {isDragging ? (
                    <h1 className="text-lg">Drop here</h1>
                  ) : (
                    <>
                      <h1 className="text-lg">Upload {title}</h1>
                      <h1 className="text-sm text-dark-light">
                        or Drag and drop
                      </h1>
                    </>
                  )}
                </div>
              )}
            </label>
          </div>
          <div className="flex justify-center flex-col items-center">
            <label htmlFor={name}>
              <img
                src={uploadBlueIcon}
                className="w-9 h-9 cursor-pointer"
                onMouseEnter={(e) => (e.currentTarget.src = uploadGrayIcon)}
                onMouseLeave={(e) => (e.currentTarget.src = uploadBlueIcon)}
                alt="upload"
              />
            </label>
            <Input
              onChange={handleChange}
              id={name}
              name={name}
              type="file"
              hidden
              accept={accept}
              error={error}
              helperText={helperText}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(UploadFile);
