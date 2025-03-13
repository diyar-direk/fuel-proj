import { Button } from "@headlessui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "src/components/inputs/Input";
import TextArea from "src/components/inputs/TextArea";

import AutocompleteApi from "src/components/inputs/AutocompleteApi";
import { memo } from "react";
import { axiosInstance } from "src/app/axios";
import { createSectorApi, fetchCouncils } from "../api/api";
import Header from "src/components/sidbar/Header";
import Sidebar from "src/components/sidbar/Sidbar";

const AddSector = () => {
  const formik = useFormik({
    initialValues: { name: "", descreption: "", council: "" },
    validationSchema: yup.object({
      name: yup.string().required("يجب عليك إدخال اسم الكومين"),
      descreption: yup
        .string()
        .min(8, "يجب أن يكون الوصف أكثر من 8 أحرف")
        .required("يجب عليك إدخال الوصف"),
      council: yup.object().nullable().required("يجب أن تختار مجلسًا"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axiosInstance.post(createSectorApi, {
          ...values,
          council: values.council ? values.council.id : null,
        });

        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Header />
      <Sidebar />
      {/* <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center overflow-hidden items-center h-[calc(100vh-100px)] max-sm:h-[calc(100vh-70px)] mx-auto relative"
      >
        <div className="bg-white z-10 max-xs:w-[88%] max-lg:w-[70%] max-md:w-[80%] w-1/2 p-[30px] rounded-[10px]">
          <h1 className="text-3xl font-bold mb-[20px] max-xs:text-[18px] max-md:text-[22px] text-center text-primary-main">
            اضافة كومين جديد
          </h1>

          <div className="flex flex-col flex-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="max-md:text-[15px] max-xs:text-[14px]"
              >
                اسم الكومين
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسم الكومين"
                helperText={formik.touched.name && formik.errors.name}
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
                name="name"
                className="mt-[10px] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]"
                error
              />

              <div>
                <label className="max-md:text-[15px] max-xs:text-[14px]">
                  اختيار مجلس
                </label>
                <AutocompleteApi
                  className="mt-[10px] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]"
                  fetchData={fetchCouncils}
                  error
                  helperText={
                    formik.touched.descreption && formik.errors.descreption
                  }
                  onChange={(event) => {
                    formik.setFieldValue("council", event.target.value);
                  }}
                  queryKey={["general/councils"]}
                  getOptionLabel={(option) => option?.name}
                  getInputLabel={(option) => option?.name}
                  getOptionProps={(option) => ({})}
                  getUniqueValue={(option) => option?.id}
                  value={formik.values.council}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="descreption"
                className="max-md:text-[15px] max-xs:text-[14px]"
              >
                وصف للكومين
              </label>
              <TextArea
                placeholder="قم بكتابة وصف للكومين"
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
      </form> */}
    </>
  );
};

export default memo(AddSector);
