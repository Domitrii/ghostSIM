import { useDispatch, useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
import { selectWaterPerDay } from "../../redux/water/selectors";
import css from './WaterList.module.css'
import { apiDeleteWaterRecord, apiUpdateWaterRecord } from "../../redux/water/operation";

function WaterList({ selectDay, setOpenEdit, setItemId }) {
    const resp = useSelector(selectWaterPerDay)
    const dispatch = useDispatch()

    const handleDelete = (resp) => {
        dispatch(apiDeleteWaterRecord(resp))
      }

    // const handleEdit = (resp) => {
    //     dispatch(apiUpdateWaterRecord(resp))
    // }
    return (
        <ul key="ul" className={css.listBlock}>
            {resp.data && Array.isArray(resp.data) && resp.data.length > 0 ? (
                resp.data.map(item => (
                    <li key={item._id} className={css.itemBlock}>
                        <WaterItem resp={item} setEditModal={setOpenEdit} handleDelete={handleDelete} setItemId={setItemId} />
                    </li>
                ))
            ) : (null)}
        </ul>
    );
}

export default WaterList;
