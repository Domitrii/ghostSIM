import { useState } from 'react';
import css from './TrackSecPage.module.css';
import { CiSettings, CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import MonthCount from './MonthCount/MonthCount';
import ModalForm from '../ModalForm/ModalForm';
import WaterList from '../WaterList/WaterList';
import { currentDay } from './MonthCount/Counts';
import { selectCurrentUser } from '../../redux/auth/selectors';
import SettingsModal from '../SettingsModal/SettingsModal';
import { apiAddWaterRecord } from '../../redux/water/operation';

function TrackSecPage({ selectDay, onSelect, handleLogout, userName, setIsModal, isModal, addWater, setSetModal, setModal, setDailyNormData, dailyNormData }) {
    const [isActive, setIsActive] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
    const selector = useSelector(selectCurrentUser);
    const [editModal, setEditModal] = useState(false);
    const [amountNow, setAmountNow] = useState(0);
    const [itemId, setItemId] = useState(null)

    const dispatch = useDispatch();

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const settingsData = async () => {
        try {
            const data = await selector;
            setIsSetting(true);
            setSetModal(data);
        } catch (error) {
            console.error(error);
        }
    };

    const closeSettings = () => {
        setIsSetting(false);
    };

    const closeModal = () => {
        setIsModal(false);
    };

    const handleOpenEditModal = (amount) => {
        setAmountNow(amount);
        setEditModal(true);
    };

    const handleCloseEdit = () => {
        setEditModal(false);
    };

    // const onEditData = async (data) => {
    //     console.log(data)

    // }

    const onSubmitData = async (data) => {
        data.time = `${selectDay}-${data.time}`;
        dispatch(apiAddWaterRecord(data));
    };

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
                            {isActive ? (
                                <div className={css.setLogOutBlock}>
                                    <p onClick={settingsData}><CiSettings />Settings</p>
                                    <p onClick={handleLogout} className={css.nav}><CiLogout />Log out</p>
                                </div>
                            ) : (null)}
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
                    <WaterList selectDay={selectDay} setOpenEdit={handleOpenEditModal} setItemId={setItemId} />
                </div>
            </div>
            <div className={css.monthCountBlock}>
                <MonthCount selectDay={selectDay} onSelect={onSelect} /> 
            </div>
            {isModal && 
            <ModalForm 
                text={'Add water'} 
                choose={"Choose water value:"} 
                close={closeModal} 
                onSubmitData={onSubmitData} 
            />}

            {isSetting && 
            <SettingsModal 
                close={closeSettings}
                data={setModal} 
                daily={setDailyNormData}
                dailyNormData={dailyNormData}
            />}

            {editModal && 
            <ModalForm 
                text={'Edit water amount'} 
                choose={'Edit water value:'} 
                close={handleCloseEdit}
                onSubmitData={onSubmitData}
                amountNow={amountNow} 
                itemId={itemId}
                editModal={editModal}
            />}
        </div>
    );
}

export default TrackSecPage;
