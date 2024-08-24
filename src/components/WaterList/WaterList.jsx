import { useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
import { selectWaterPerDay } from "../../redux/water/selectors";
import css from './WaterList.module.css'

function WaterList({ selectDay, setOpenEdit }) {
    const resp = useSelector(selectWaterPerDay)
    console.log(resp)
    return (
        <ul key="ul" className={css.listBlock}>
            {resp.data && Array.isArray(resp.data) && resp.data.length > 0 ? (
                resp.data.map(item => (
                    <li key={item._id} className={css.itemBlock}>
                        <WaterItem resp={item} setEditModal={setOpenEdit} />
                    </li>
                ))
            ) : (null)}
        </ul>
    );
}

export default WaterList;
