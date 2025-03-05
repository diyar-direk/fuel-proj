import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { loginApiAsync } from "../api/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "src/components/buttons/Button";
import { loggedInSelector } from "src/app/slice";
import { memo } from "react";
import Inputs from "../components/Inputs";
import logo from "../assets/logo.svg";

function Login() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(loggedInSelector);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: yup.object({
      username: yup.string().required(`يجب عليك ادخال اسم المستخدم`),
      password: yup
        .string()
        .min(8, `يجب ان تكون كلمة المرور اكثر من 8 احرف أو ارقام`)
        .required(`يجب عليك ادخال كلمة السر`),
    }),
    onSubmit: (values) => {
      dispatch(
        loginApiAsync(values, () => {
          navigate("/");
        })
      );
    },
  });

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  const inputs = [
    {
      name: "username",
      inputProps: {
        placeholder: "مثال : جوان محمد",
      },
      labelText: "اسم المستخدم",
    },
    {
      name: "password",
      inputProps: {
        placeholder: "**********",
        type: "password",
      },
      labelText: "كلمة السر",
    },
  ];

  return (
    <>
      <div className="bg-white h-[100px] shadow-[0_0_20px_8px_#F1F1F1] max-sm:px-[10px] max-sm:h-[70px] content-center px-[20px]">
        <img src={logo} alt="" className="h-[70px] max-sm:h-[50px]" />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center overflow-hidden items-center h-[calc(100vh-100px)] max-sm:h-[calc(100vh-70px)] mx-auto relative"
      >
        <img
          src={require("../assets/Logo1.png")}
          alt=""
          loading="lazy"
          className="absolute top-[-200px] left-[-80px] w-1/3 opacity-[0.2]"
        />
        <img
          src={require("../assets/Logo1.png")}
          alt=""
          loading="lazy"
          className="absolute bottom-[-200px] right-[-80px] w-1/3 opacity-[0.2]"
        />
        <div className="shadow-[0_0_10px_5px_#F1F1F1] bg-white z-10 max-xs:w-[88%] max-lg:w-[70%] max-md:w-[80%] w-1/2 p-[30px] rounded-[10px]">
          <h1 className="text-3xl font-bold mb-[20px] max-xs:text-[20px] max-md:text-[25px] text-center text-primary-main">
            تسجيل الدخول
          </h1>

          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-4">
              <Inputs formik={formik} arrayOfData={inputs} />
              <Button className="max-lg:p-[10px] max-xs:p-[8px]" type="submit">
                تسجيل الدخول
              </Button>
              <p className="text-center max-xs:text-[12px] max-lg:text-[15px] max-md:text-[14px] text-dark-light">
                هل نسيت كلمة السر؟
                <Link className="hover:text-primary-main">
                  إعادة تعيين كلمة السر
                </Link>
              </p>
            </div>
            <div className="flex-1 max-sm:hidden py-7">
              <img
                src={require("../assets/login-prople-img.jpg")}
                className="w-[100%] h-[100%] rounded-[10px] object-cover"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default memo(Login);
