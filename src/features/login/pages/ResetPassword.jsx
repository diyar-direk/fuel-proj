import React, { useState } from "react";
import forgetImg from "../assets/computer-security-with-login-password-padlock.jpg";
import * as yup from "yup";
import { useFormik } from "formik";
import Inputs from "../components/Inputs";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const emailFormik = useFormik({
    initialValues: { email: "" },
    validationSchema: yup.object({
      email: yup.string().required(`يجب عليك ادخال البريد الالكتروني`),
    }),
    onSubmit: (values) => {},
  });
  const passwordFormik = useFormik({
    initialValues: { password: "", passwordConfirmation: "" },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("يجب عليك إدخال كلمة المرور الجديدة")
        .min(8, "يجب أن تكون كلمة المرور أكثر من 8 أحرف"),
      passwordConfirmation: yup
        .string()
        .required("يجب عليك تأكيد كلمة المرور")
        .oneOf([yup.ref("password"), null], "كلمتا المرور غير متطابقتين"),
    }),
    onSubmit: (values) => {},
  });

  const [confirmPassword, setConfimPassword] = useState(false);

  const resetInput = [
    {
      name: "email",
      inputProps: {
        placeholder: "example@gmail.com",
        type: "email",
        className:
          "w-[100%] max-lg:p-[8px] max-lg:text-[15px] p-[10px] text-m max-xs:text-[12px]",
      },
      labelText: "قم بادخال بريدك الالكتروني ليصلك كود التفعيل",
    },
  ];
  const confrimReset = [
    {
      name: "password",
      inputProps: {
        placeholder: "****************************",
        type: "password",
        className:
          "w-[100%] max-lg:p-[8px] max-lg:text-[15px] p-[10px] text-m max-xs:text-[12px]",
      },
      labelText: "اكتب كلمة المرور الجديدة",
    },
    {
      name: "passwordConfirmation",
      inputProps: {
        placeholder: "****************************",
        type: "password",
        className:
          "w-[100%] max-lg:p-[8px] max-lg:text-[15px] p-[10px] text-m max-xs:text-[12px]",
      },
      labelText: "اعد كتابة كلمة المرور",
      labelProps: {
        className: "mt-[10px]",
      },
    },
  ];

  return (
    <div className="h-screen flex gap-[20px] items-center">
      {!confirmPassword ? (
        <form className="flex w-1/2 flex-1 flex-col gap-[20px] max-xs:gap-[10px] p-[40px] max-xs:p-[20px] justify-center items-center">
          <div className="w-[80%] max-lg:w-[100%] max-md:w-[84%] max-xs:w-[100%]">
            <h1 className="text-2xl max-lg:text-xl mb-[10px] max-xs:mb-[5px] font-bold max-xs:text-[18px]">
              نسيت كلمة المرور؟
            </h1>
            <Inputs
              className="flex flex-col max-xs:gap-[10px] gap-[20px]"
              formik={emailFormik}
              arrayOfData={resetInput}
            />
          </div>
          <div className="flex w-[80%] max-lg:w-[100%] max-md:w-[84%] max-xs:w-[100%] gap-[15px] max-xs:gap-[10px]">
            <Button
              className="border-[1px] truncate max-lg:p-[8px] max-xs:text-[13px] max-lg:text-[15px] border-primary-main rounded-[4px] bg-primary-main hover:bg-primary-dark text-white transition p-[10px] flex-1"
              type="submit"
            >
              ارسال
            </Button>
            <Link
              to="/login"
              className="border-[1px] text-center max-lg:p-[8px] max-xs:text-[13px] max-lg:text-[15px] truncate border-primary-main rounded-[4px] bg-white hover:bg-primary-main hover:text-white transition text-primary-main p-[10px] flex-1"
            >
              رجوع لصفحة تسجيل الدخول
            </Link>
          </div>
        </form>
      ) : (
        <form className="flex w-1/2 flex-1 flex-col gap-[20px] max-xs:gap-[10px] p-[40px] max-xs:p-[20px] justify-center items-center">
          <div className="w-[80%] max-lg:w-[100%] max-md:w-[84%] max-xs:w-[100%]">
            <h1 className="text-2xl max-lg:text-xl mb-[10px] max-xs:mb-[5px] font-bold max-xs:text-[18px]">
              تغيير كلمة المرور
            </h1>
            <Inputs
              className="flex flex-col gap-[10px] "
              formik={passwordFormik}
              arrayOfData={confrimReset}
            />
          </div>
          <div className="flex w-[80%] max-lg:w-[100%] max-md:w-[84%] max-xs:w-[100%] gap-[15px] max-xs:gap-[10px]">
            <Button
              className="truncate max-lg:p-[8px] max-xs:text-[13px] max-lg:text-[15px] rounded-[4px] bg-success-main text-white p-[10px] flex-1"
              type="submit"
            >
              ارسال
            </Button>
            <Link
              to="/login"
              className="border-[1px] text-center max-lg:p-[8px] max-xs:text-[13px] max-lg:text-[15px] truncate border-primary-main rounded-[4px] bg-white hover:bg-primary-main hover:text-white transition text-primary-main p-[10px] flex-1"
            >
              رجوع لصفحة تسجيل الدخول
            </Link>
          </div>
        </form>
      )}
      <div className="flex max-md:hidden items-center justify-center w-1/2">
        <img src={forgetImg} loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default ResetPassword;
