import { Button } from "@headlessui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "src/components/inputs/Input";
import TextArea from "src/components/inputs/TextArea";
import { memo } from "react";
import { axiosInstance } from "src/app/axios";
import map from "../../../assets/map.jpg";
import { createDirectorateApi } from "../api/api";
const AddDirectorate = () => {
  const formik = useFormik({
    initialValues: { name: "", descreption: "" },
    validationSchema: yup.object({
      name: yup.string().required("يجب عليك إدخال اسم المقطعة"),
      descreption: yup
        .string()
        .min(8, "يجب أن يكون الوصف أكثر من 8 أحرف")
        .required("يجب عليك إدخال الوصف"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axiosInstance.post(createDirectorateApi, values);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center overflow-hidden items-center h-[calc(100vh-100px)] max-sm:h-[calc(100vh-70px)] mx-auto relative"
      >
        <img
          src={map}
          alt=""
          className="absolute w-[100%] h-[100%] object-cover opacity-[0.3] top-0 left-0"
        />
        <div className="bg-white z-10 max-xs:w-[88%] max-lg:w-[70%] max-md:w-[80%] w-1/2 p-[30px] rounded-[10px]">
          <h1 className="text-3xl font-bold mb-[20px] max-xs:text-[18px] max-md:text-[22px] text-center text-primary-main">
            اضافة مقاطعة جديدة
          </h1>

          <div className="flex flex-col flex-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="max-md:text-[15px] max-xs:text-[14px]"
              >
                اسم المقاطعة
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسم المقاطعة"
                helperText={formik.touched.name && formik.errors.name}
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
                name="name"
                className="mt-[10px] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]"
                error
              />
            </div>

            <div>
              <label
                htmlFor="descreption"
                className="max-md:text-[15px] max-xs:text-[14px]"
              >
                وصف للمقاطعة
              </label>
              <TextArea
                placeholder="قم بكتابة وصف للمقاطعة"
                rows={5}
                type="text"
                helperText={
                  formik.touched.descreption && formik.errors.descreption
                }
                onChange={formik.handleChange}
                value={formik.values.descreption}
                id="descreption"
                name="descreption"
                className="mt-[10px] resize-none h-[100%] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]"
                error
              />
            </div>
          </div>
          <Button
            className="max-lg:p-[10px] rounded-[10px] mt-[20px] max-xs:p-[8px] bg-agriculture-main text-white w-[100%] hover:bg-success-main p-[10px]"
            type="submit"
          >
            اضافة
          </Button>
        </div>
      </form>
    </>
  );
};

export default memo(AddDirectorate);
