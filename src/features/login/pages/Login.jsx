import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { loginApiAsync } from "../api/api";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "src/components/inputs/Input";
import Button from "src/components/buttons/Button";
import { loggedInSelector } from "src/app/slice";
import { memo } from "react";

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

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex justify-center items-center h-[100vh] flex-col gap-3 w-[30vw] mx-auto"
    >
      <h1 className="text-2xl">Login</h1>
      <Input
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        error
        helperText={formik.touched.username && formik.errors.username}
      />
      <Input
        type="text"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default memo(Login);
