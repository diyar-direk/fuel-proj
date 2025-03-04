import React, { memo } from "react";
import Input from "src/components/inputs/Input";

const Inputs = ({ arrayOfData, formik, ...props }) => {
  const data = arrayOfData?.map((e, i) => (
    <div key={i} {...props}>
      <label
        className="max-md:text-[15px] max-xs:text-[14px]"
        htmlFor={e.name}
        {...e.labelProps}
      >
        {e.labelText}
      </label>
      <Input
        {...e.inputProps}
        type={e.inputProps.type ? e.inputProps.type : "text"}
        helperText={formik.touched[e.name] && formik.errors[e.name]}
        onChange={formik.handleChange}
        value={formik.values[e.name]}
        id={e.name}
        name={e.name}
        className="mt-[10px] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]"
        error
      />
    </div>
  ));

  return data;
};

export default memo(Inputs);
