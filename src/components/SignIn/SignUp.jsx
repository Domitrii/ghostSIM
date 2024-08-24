import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import css from './SignUp.module.css'
import Container from "../Container/Container";
import LeftContainer from "../Container/LeftContainer";
import Wallpaper from "../WallpaperSection/Wallpaper";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operation";
import { Toaster, toast } from "react-hot-toast";
import { IoIosClose } from "react-icons/io";


const UserLogInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(50).required("Password is not success"),
    repeatPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("It's not like your password")
})


function SignIn() {
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch()

    const closeToast = () => {
        toast.remove()
      }

    const onSignUp = async (formData) => {
            const a = await dispatch(apiRegisterUser(formData))
            if(a.error){
                toast.custom(<div className={css.toastStyle}>
                    User already exist
                    <p className={css.closeToast} onClick={closeToast}><IoIosClose className={css.closeBtn} /></p>
                    </div>, {duration: 1300});
            }
    }

    const INITIAL_FORM_DATA = {
        email: "",
        password: "",
        repeatPassword: ""
    }

    const handleFormSubmit = (data, {resetForm}) => {
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
        <Toaster />
    </Container>
  )
}

export default SignIn