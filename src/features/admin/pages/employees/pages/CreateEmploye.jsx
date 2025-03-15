import { Button } from "@headlessui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import AutocompleteApi from "src/components/inputs/AutocompleteApi";
import { memo } from "react";
import { axiosInstance } from "src/app/axios";
import Input from "src/components/inputs/Input";
import { createEmployeApi, getSpecializations } from "../api/api";
import UploadFile from "src/components/file/UploadFile";
import Header from "src/components/sidbar/Header";
import Sidebar from "src/components/sidbar/Sidbar";

const CreateEmoloye = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      address: "",
      specialization: "",
      profile_photo: null,
    },
    validationSchema: yup.object({
      username: yup.string().required("يجب أن تكتب اسم المستخدم"),
      password: yup
        .string()
        .required("يجب أن تكتب كلمة المرور")
        .min(8, "يجب ان تكون كلمة المرور اكثر من ثمانية احرف"),
      first_name: yup.string().required("يجب كتابة اسمك الاول"),
      middle_name: yup.string().required("يجب كتابة اسمك الثاني"),
      last_name: yup.string().required("يجب كتابة اسمك الثالث"),
      specialization: yup.object().nullable().required("يجب أن تختار لجنة"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("password", values.password);
        formData.append("first_name", values.first_name);
        formData.append("middle_name", values.middle_name);
        formData.append("last_name", values.last_name);
        formData.append("address", values.address);
        formData.append(
          "specialization",
          values.specialization ? values.specialization.id : null
        );

        if (values.profile_photo?.file) {
          formData.append("profile_photo", values.profile_photo.file);
        }

        await axiosInstance.post(createEmployeApi, formData);

        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const imageDivClassName =
    "bg-white z-10 mb-[20px] max-md:w-[80%] p-[30px] rounded-[10px] w-1/2";
  const divClassName =
    "bg-white z-10 mb-[20px] max-md:w-[80%] p-[30px] gap-[20px] rounded-[10px] flex flex-wrap";
  const labelClassName = "max-md:text-[15px] max-xs:text-[14px]";
  const inputClassName =
    "mt-[10px] py-[7px] max-lg:p-[6px] px-[10px] border-dark-dark max-md:text-[15px] max-xs:text-[14px]";
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <form onSubmit={formik.handleSubmit} className="m-[20px] flex-1">
          <div className={imageDivClassName}>
            <UploadFile
              title="الصورة الشخصية"
              name="profile_photo"
              value={formik.values.profile_photo}
              onChange={(event) =>
                formik.setFieldValue("profile_photo", event.target.value)
              }
              accept="image/*"
            />
          </div>
          <div className={divClassName}>
            <div className="flex-[300px]">
              <label htmlFor="username" className={labelClassName}>
                اسم المستخدم
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسم المستخدم"
                helperText={formik.touched.username && formik.errors.username}
                onChange={formik.handleChange}
                value={formik.values.username}
                id="username"
                name="username"
                className={inputClassName}
                error
              />
            </div>
            <div className="flex-[300px]">
              <label htmlFor="password" className={labelClassName}>
                كلمة المرور
              </label>
              <Input
                type={"password"}
                placeholder="اكتب كلمة المرور"
                helperText={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"
                className={inputClassName}
                error
              />
            </div>
            <div className="flex-[300px]">
              <label htmlFor="first_name" className={labelClassName}>
                الاسم الاول
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسمك الاول"
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
                onChange={formik.handleChange}
                value={formik.values.first_name}
                id="first_name"
                name="first_name"
                className={inputClassName}
                error
              />
            </div>
            <div className="flex-[300px]">
              <label htmlFor="middle_name" className={labelClassName}>
                الاسم الثاني
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسمك الثاني"
                helperText={
                  formik.touched.middle_name && formik.errors.middle_name
                }
                onChange={formik.handleChange}
                value={formik.values.middle_name}
                id="middle_name"
                name="middle_name"
                className={inputClassName}
                error
              />
            </div>
            <div className="flex-[300px]">
              <label htmlFor="last_name" className={labelClassName}>
                الاسم الثالث
              </label>
              <Input
                type={"text"}
                placeholder="اكتب اسمك الثالث"
                helperText={formik.touched.last_name && formik.errors.last_name}
                onChange={formik.handleChange}
                value={formik.values.last_name}
                id="last_name"
                name="last_name"
                className={inputClassName}
                error
              />
            </div>
            <div className="flex-[300px]">
              <label htmlFor="address" className={labelClassName}>
                العنوان
              </label>
              <Input
                type={"text"}
                placeholder="اكتب مكان تواجدك"
                onChange={formik.handleChange}
                value={formik.values.address}
                id="address"
                name="address"
                className={inputClassName}
              />
            </div>

            <div className="flex-[300px]">
              <label htmlFor="address" className={labelClassName}>
                التخصص
              </label>
              <AutocompleteApi
                className={inputClassName}
                fetchData={getSpecializations}
                error
                helperText={
                  formik.touched.specialization && formik.errors.specialization
                }
                onChange={(event) => {
                  formik.setFieldValue("specialization", event.target.value);
                }}
                queryKey={["account/specializations"]}
                getOptionLabel={(option) => option?.name}
                getInputLabel={(option) => option?.name}
                getUniqueValue={(option) => option?.id}
                value={formik.values.specialization}
              />
            </div>
          </div>
          <Button
            className="max-lg:p-[10px] rounded-[10px] mt-[20px] max-xs:p-[8px] w-1/2 bg-agriculture-main text-white hover:bg-success-main p-[10px]"
            type="submit"
          >
            اضافة
          </Button>
        </form>
      </section>
    </>
  );
};

export default memo(CreateEmoloye);
