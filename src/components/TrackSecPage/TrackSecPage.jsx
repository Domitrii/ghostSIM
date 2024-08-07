import { useState } from 'react'
import css from './TrackSecPage.module.css'
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/selectors';
import MonthCount from './MonthCount/MonthCount';
import ModalForm from '../ModalForm/ModalForm';
import WaterList from '../WaterList/WaterList';
import { apiAddWaterRecord, apiDailyRecord } from '../../redux/water/operation';
import { currentDay, currentTime } from './MonthCount/Counts';
import { NavLink } from 'react-router-dom';

function TrackSecPage({selectDay, onSelect, logOut}) {
    let userName = useSelector(selectUserData)
    if(typeof userName !== 'string' ){
        userName = "User"
    }
    const dispatch = useDispatch()

    const handleAddNewWater = (newWater) => {
        dispatch(apiAddWaterRecord(newWater))
    }

    const [isActive, setIsActive] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    const addWater = () => {
        setIsModal(true)
        onSelect(currentDay())
        dispatch(apiDailyRecord(currentDay()))
    }

    const closeModal = () => {
        setIsModal(false)
    }

    const onSubmitData = (data) => {
        handleAddNewWater({
            ...data,
            time: `${selectDay}-${data.time}`
        })
    }

  return (
    <div className={css.secTrackPage}>
        <div className={css.secondBlockTop}>
            <h3>Hello, {userName}</h3>
            <div className={css.avatarBlock}>
                <div className={css.userBlock}>
                    <div className={css.userAvatar} onClick={handleClick}>
                        {userName}
                        <div className={css.circle}></div>
                    </div>
                    <div className={`${css.transition} ${isActive ? css.visible : css.hidden}`}>
                        { isActive ? (<div>
                            <p><CiSettings />Settings</p>
                            <p onClick={logOut}><NavLink to="/" className={css.nav}><CiLogout />Log out</NavLink></p>
                        </div>) : (null)}
                    </div>
                </div>
            </div>
        </div>
        <div className={css.todayWater}>
            <div className={css.addBar}>
                <h3>Today</h3>
                <button className={css.addWaterBtn} onClick={addWater}><span>+</span> Add Water</button>
            </div>
            <div className={css.addWaterSec}>
                <WaterList selectDay={selectDay} />
            </div>
        </div>
        <div className={css.monthCountBlock}>
            <MonthCount selectDay={selectDay} /> 
        </div>
        {isModal ? 
        <ModalForm text={'Add water'} 
        choose={"Choose water value:"} 
        close={closeModal} 
        onSubmitData={onSubmitData} /> : (null)}
    </div>
  )
}

export default TrackSecPage