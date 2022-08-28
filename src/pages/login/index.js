import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useThemes } from "./style";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
import Message from "../../components/Message";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const classes = useThemes();

  const [infoMessage, setInfoMessage] = useState({
    isOpen: false,
    message: "",
    status: "",
  });
  const [isLoading, setLoading] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("No email format!")
        .required("Email cannot be blank!"),
      password: Yup.string()
        .min(6, "Must have at least 6 characters!")
        .required("Password cannot be blank!"),
    }),
    onSubmit: (values) => {
      setLoading(true);
    },
  });

  const responseGoogle = (response) => {};

  const handleClose = () => {
    setInfoMessage({ isOpen: false });
  };
  const forgotPassword = () => {};

  return (
    <Grid className={classes.root} container>
      <Grid item xs={6} className={classes.loginLeft}>
        <LoginLeft />
      </Grid>
      <Grid item xs={6} className={classes.rightPadding}>
        <LoginRight
          onSuccess={responseGoogle}
          onSubmit={formik.handleSubmit}
          valueEmail={formik.values.email}
          valuePassword={formik.values.password}
          onChangeEmail={formik.handleChange}
          onChangePassword={formik.handleChange}
          isLoading={isLoading}
          errorEmail={formik.errors.email}
          errorPassword={formik.errors.password}
          touchedEmail={formik.touched.email}
          touchedPassword={formik.touched.password}
          forgotPassword={forgotPassword}
        />
      </Grid>
      <Message
        open={infoMessage.isOpen}
        handleClose={handleClose}
        title={infoMessage.message}
        status={infoMessage.status}
      />
    </Grid>
  );
};

export default Login;
