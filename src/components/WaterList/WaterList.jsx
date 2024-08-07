import { useSelector } from "react-redux";
import { selectWaterPerDay } from "../../redux/water/selectors";
import WaterItem from "../WaterItem/WaterItem";

function WaterList({ selectDay }) {
    const response = useSelector(selectWaterPerDay);

    console.log(response)
    return (
        <div>
            {response.data && Array.isArray(response.data) && response.data.length > 0 ? (
                <ul>
                    {response.data.map(item => (
                        <li key={item._id}>
                            <WaterItem selectDay={selectDay} />
                        </li>
                    ))}
                </ul>
            ) : (null)}
        </div>
    );
}

export default WaterList;
