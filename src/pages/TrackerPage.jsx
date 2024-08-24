import { useEffect, useState } from "react";
import DocumentTitle from "../DocumentTitle";
import TrackFirstBlock from "../components/TrackFirstBlock/TrackFirstBlock";
import TrackSecPage from "../components/TrackSecPage/TrackSecPage";
import { currentDay } from "../components/TrackSecPage/MonthCount/Counts";
import { useDispatch, useSelector } from "react-redux";
import { apiAddWaterRecord, apiDailyRecord } from "../redux/water/operation";
import { apiCurrentUser, apiLogOutUser, apiUpdateUser } from "../redux/auth/operation";
import { useNavigate } from "react-router-dom";
import { selectWaterPerDay } from "../redux/water/selectors";

function TrackerPage() {
  const [selectDay, setSelectDay] = useState(currentDay());
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const response = useSelector(selectWaterPerDay);
  const [userName, setUserName] = useState('User')

  const onSelect = (day) => {
    setSelectDay(day);
  };

  // const waterToday = async () => {
  //   console.log(data)
  // }

  const handleLogout = async () => {
    try {
      const resp = await dispatch(apiLogOutUser());
      if(resp){
        navigate('/')
      } else {
        console.log('err')
      }
      return resp
    } catch (error) {
      console.error(error)
    }
  };

  const userOnLogin = async () => {
    const user = await dispatch(apiCurrentUser())
    if(!user){
      console.error(`it's not a user`)
      return 
    } 
    setUserName(user.payload.name) 
  }

  useEffect(() => {
    dispatch(apiDailyRecord(selectDay));
    // dispatch(apiUpdateUser())
    dispatch(apiCurrentUser())
    userOnLogin()
  }, [dispatch]);

  return (
    <div className="TrackBlock">
      <DocumentTitle>Tracker</DocumentTitle>
      <TrackFirstBlock />
      <TrackSecPage selectDay={selectDay} onSelect={onSelect} handleLogout={handleLogout} userName={userName} 
      // waterResp={response} 
      />
    </div>
  );
}

export default TrackerPage;
