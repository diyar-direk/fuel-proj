import { Button } from "@headlessui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import AutocompleteApi from "src/components/inputs/AutocompleteApi";
import { memo } from "react";
import { axiosInstance } from "src/app/axios";
import { createCouncilApi, fetchCommittees } from "../api/api";
import TextArea from "src/components/inputs/TextArea";
import Input from "src/components/inputs/Input";

const AddCouncil = () => {
  const formik = useFormik({
    initialValues: { name: "", descreption: "", committee: "" },
    validationSchema: yup.object({
      name: yup.string().required("يجب أن تكتب اسم للمجلس"),
      descreption: yup
        .string()
        .min(8, "يجب ان يكون الوصف اكثؤ من 8 احرف")
        .required("يجب كتابة وصف للمجلس"),
      committee: yup.object().nullable().required("يجب أن تختار لجنة"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axiosInstance.post(createCouncilApi, {
          ...values,
          committee: values.committee ? values.committee.id : null,
        });

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
        <div className="bg-white z-10 max-xs:w-[88%] max-lg:w-[70%] max-md:w-[80%] w-1/2 p-[30px] rounded-[10px]">
          <h1 className="text-3xl font-bold mb-[20px] max-xs:text-[18px] max-md:text-[22px] text-center text-primary-main">
            اضافة مجلس جديد
          </h1>

          <div className="flex flex-col flex-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="max-md:text-[15px] max-xs:text-[14px]"
              >
                اسم المجلس
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسم المجلس"
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
              <label className="max-md:text-[15px] max-xs:text-[14px]">
                اختيار لجنة
              </label>
              <AutocompleteApi
                className="mt-[10px] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]"
                fetchData={fetchCommittees}
                error
                helperText={
                  formik.touched.descreption && formik.errors.descreption
                }
                onChange={(event) => {
                  formik.setFieldValue("committee", event.target.value);
                }}
                queryKey={["general/committees"]}
                getOptionLabel={(option) => option?.name}
                getInputLabel={(option) => option?.name}
                getOptionProps={(option) => ({})}
                getUniqueValue={(option) => option?.id}
                value={formik.values.committee}
              />
            </div>

            <div>
              <label
                htmlFor="descreption"
                className="max-md:text-[15px] max-xs:text-[14px]"
              >
                وصف للمجلس
              </label>
              <TextArea
                placeholder="قم بكتابة وصف للمجلس"
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

export default memo(AddCouncil);
