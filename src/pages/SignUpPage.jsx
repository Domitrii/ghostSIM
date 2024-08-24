 import { useDispatch } from "react-redux"
import DocumentTitle from "../DocumentTitle"
import SignIn from "../components/SignIn/SignUp"


function SignUp() {
  return (
    <div>
        <DocumentTitle>Sign Up</DocumentTitle>
        <SignIn />
    </div>
  )
}

export default SignUp