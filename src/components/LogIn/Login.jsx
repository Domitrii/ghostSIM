import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import css from './LogIn.module.css'
import Wallpaper from "../WallpaperSection/Wallpaper";
import Container from "../Container/Container";
import LeftContainer from "../Container/LeftContainer";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const UserLogInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(50).required("Password is not success")
})


function LogIn({onLogin}) {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const INITIAL_FORM_DATA = {
        email: "",
        password: ""
    }

    // handle form async await

    const handleFormSubmit = (data, {resetForm}) => {
        const result = onLogin(data)
        if(result){
            toast("not that password or email")
        } else {
            navigate("/tracker")
        }
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
                    <h2 className={css.signInH}>Log in</h2>
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
                    <NavLink to="/forgot-password" className={css.forgotPassLink}>
                        Forgot Password?
                    </NavLink>
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

export default LogIn