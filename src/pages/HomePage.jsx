import { useSearchParams } from 'react-router-dom'
import DocumentTitle from '../DocumentTitle.jsx'
import TrackerImgSect from '../components/TrackerImgSect/TrackerImgSect'
import { useDispatch } from 'react-redux'

function HomePage() {
  return (
    <div>
        <DocumentTitle>Home</DocumentTitle>
        <TrackerImgSect />
    </div>
  )
}

export default HomePage