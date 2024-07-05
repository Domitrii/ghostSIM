import { lazy } from "react"
const TrackerImgSect = lazy(() => import("../TrackerImgSect/TrackerImgSect"))


function App() {
  return (
    <>
        <TrackerImgSect />
    </>
  )
}

export default App