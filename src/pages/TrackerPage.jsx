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
  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isModal, setIsModal] = useState(false);
  const [userName, setUserName] = useState('User')
  const [setModal, setSetModal] = useState(null);
  const [dailyNormData, setDailyNormData] = useState(2000)
  const selectWater = useSelector(selectWaterPerDay)
  const [waterAmount, setWaterAmount] = useState(0)

  const addWater = () => {
    setIsModal(true);
    onSelect(currentDay());
};

  const onSelect = async (day) => {
    setSelectDay(day);
    await dispatch(apiDailyRecord(day));
  };

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
    const user = await dispatch(apiCurrentUser());
    const select = await selectWater;
    try {
      if (user.payload) {
        setUserData(user.payload);
        setUserName(user.payload.name);
        setDailyNormData(user.payload.dailyNorm || 2000);
        
        if (select && select.waterAmount) {
          setWaterAmount(select.waterAmount);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (selectWater && selectWater.waterAmount) {
      setWaterAmount(selectWater.waterAmount);  
    }
  }, [selectWater]);

  useEffect(() => {
    async function loadData() {
      await userOnLogin(); 
      dispatch(apiDailyRecord(selectDay)); 
    }
    loadData(); 
  }, [dispatch, selectDay]);
  

  return (
    <div className="TrackBlock">
      <DocumentTitle>Tracker</DocumentTitle>
      <TrackFirstBlock userData={userData} addWater={addWater} dailyNormData={dailyNormData} waterAmount={waterAmount} />
      <TrackSecPage 
        selectDay={selectDay}
        onSelect={onSelect} 
        handleLogout={handleLogout} 
        userName={userName} 
        setIsModal={setIsModal} 
        isModal={isModal} 
        addWater={addWater}
        setSetModal={setSetModal}
        setModal={setModal}
        setDailyNormData={setDailyNormData}
        dailyNormData={dailyNormData}
      />
    </div>
  );
}

export default TrackerPage;
