import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Loader from '../Loader/Loader.jsx'
const HomePage = lazy(() => import("../../pages/HomePage"))
const SignUpPage = lazy(() => import("../../pages/SignUpPage.jsx"))
const SignInPage = lazy(() => import("../../pages/SignInPage.jsx"))
const TrackerPage = lazy(() => import("../../pages/TrackerPage.jsx"))
const PasswordRecoverPage = lazy(() => import("../../pages/PassportRecover.jsx"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage.jsx"))


function App() {
  return (
    <div className="appCont">
    <Suspense fallback={<Loader />} >
        <Routes>
            <Route
            path="/"
            element={<HomePage />} 
            />
            <Route
            path="/signup"
            element={<SignUpPage />}
            />
            <Route
            path="/login"
            element={<SignInPage />}
            />
            <Route
            path="/tracker"
            element={<TrackerPage />}
            />
            <Route
            path="/password-recover"
            element={<PasswordRecoverPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Suspense>
    </div>
  )
}

export default App