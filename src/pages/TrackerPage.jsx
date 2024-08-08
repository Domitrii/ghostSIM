import { useEffect, useState } from "react"
import DocumentTitle from "../DocumentTitle"
import TrackFirstBlock from "../components/TrackFirstBlock/TrackFirstBlock"
import TrackSecPage from "../components/TrackSecPage/TrackSecPage"
import { currentDay } from "../components/TrackSecPage/MonthCount/Counts"
import { useDispatch } from "react-redux"
import { apiAddWaterRecord, apiDailyRecord } from "../redux/water/operation"
import { apiLogOutUser } from "../redux/auth/operation"

function TrackerPage() {
  const [selectDay, setSelectDay] = useState(currentDay())
  const onSelect = day => {
    setSelectDay(day)
  }

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(apiDailyRecord())
  }, [dispatch])
  

  const handleLogout = () => {
    dispatch(apiLogOutUser())
  }

  return (
    <div className="TrackBlock">
        <DocumentTitle>Tracker</DocumentTitle>
        <TrackFirstBlock />
        <TrackSecPage selectDay={selectDay} onSelect={onSelect} logOut={handleLogout} />
    </div>
  )
}

export default TrackerPage