 import { useDispatch } from "react-redux"
import DocumentTitle from "../DocumentTitle"
import SignIn from "../components/SignIn/SignUp"
import { apiRegisterUser } from "../redux/auth/operation"


function SignUp() {
  const dispatch = useDispatch()

  const SignUpFn = (formData) => {
    dispatch(apiRegisterUser(formData))
    console.log(formData)
  }

  return (
    <div>
        <DocumentTitle>Sign Up</DocumentTitle>
        <SignIn onSignUp={SignUpFn} />
    </div>
  )
}

export default SignUp