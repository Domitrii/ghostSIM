import { useDispatch } from "react-redux"
import DocumentTitle from "../DocumentTitle"
import LogIn from "../components/LogIn/Login"
import { apiLogInUser } from "../redux/auth/operation"


function SignIn() {
  const dispatch = useDispatch()

  const LoginFn = (formData) => {
    dispatch(apiLogInUser(formData))
    // try {
    //   const response = await dispatch(apiLogInUser(formData))
    //   return response.token ? true : false
    // } catch(error) {
    //   return false
    // }
  }

  return (
    <div>
      <DocumentTitle>SignIn</DocumentTitle>
      <LogIn onLogin={LoginFn} />
    </div>
  )
}

export default SignIn