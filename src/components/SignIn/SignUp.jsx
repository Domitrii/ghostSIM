import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import css from './SignUp.module.css'
import Container from "../Container/Container";
import LeftContainer from "../Container/LeftContainer";
import Wallpaper from "../WallpaperSection/Wallpaper";
import { NavLink } from "react-router-dom";


const UserLogInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(50).required("Password is not success"),
    repeatPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("It's not like your password")
})


function SignIn({onSignUp}) {
    const [isVisible, setIsVisible] = useState(false)

    const INITIAL_FORM_DATA = {
        email: "",
        password: "",
        repeatPassword: ""
    }

    const handleFormSubmit = (data, {resetForm}) => {
        console.log(data)
        onSignUp(data)
        resetForm()
    }


  return (
    <Container>
        <LeftContainer>
            <NavLink to="/" className={css.aquaLogo}>
                AQUATRACK
            </NavLink>
            <Formik onSubmit={handleFormSubmit} validationSchema={UserLogInSchema} initialValues={INITIAL_FORM_DATA}>
                <Form className={css.form}>
                    <h2 className={css.signInH}>Sign Up</h2>
                    <label className={css.justLabe}>
                        <h3>
                            Email
                        </h3>
                        <div className={css.passSect}>
                            <Field type="text" name="email" className={css.field} placeholder="Enter your email" />
                        </div>
                            <ErrorMessage name="email" component="span" className={css.errorMsg} />
                    </label>
                    <label className={css.justLabe}>
                        <h3>
                            Password
                        </h3>
                        <div className={css.passSect}>
                            <Field type={isVisible ? "text" : "password"} name="password" className={css.field} placeholder="Enter your password" />
                            <span className={css.eyeSlash} onClick={() => setIsVisible(!isVisible)}>
                                {isVisible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <ErrorMessage name="password" component="span" className={css.errorMsg} />
                    </label>
                    <label className={css.justLabe}>
                        <h3>
                            Repeat Password
                        </h3>
                        <div className={css.passSect}>
                            <Field type={isVisible ? "text" : "password"} name="repeatPassword" className={css.field} placeholder="Repeat your password" />
                            <span className={css.eyeSlash} onClick={() => setIsVisible(!isVisible)}>
                                {isVisible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <ErrorMessage name="repeatPassword" component="span" className={css.errorMsg} />
                    </label>
                    <button
                    className={css.sbmBtn}
                    type="submit"
                    >Sign In</button>
                </Form>
            </Formik>
        </LeftContainer>
        <Wallpaper />
    </Container>
  )
}

export default SignIn