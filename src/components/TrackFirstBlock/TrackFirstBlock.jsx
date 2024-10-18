import { useEffect, useState } from 'react';
import css from './TrackFirstBlock.module.css';
import { useSelector } from 'react-redux';
import { selectWaterPerDay } from '../../redux/water/selectors';

function TrackFirstBlock({ userData, addWater, dailyNormData }) {
  const [percentage, setPercentage] = useState(0);
//   const [tryer, setTryer] = useState(2)
  const consumedWater = useSelector(selectWaterPerDay);

  useEffect(() => {
    if (dailyNormData > 0 && consumedWater) {
      const percent = (consumedWater / dailyNormData) * 100;
      setPercentage(percent);
    }
  }, [dailyNormData, consumedWater]);

  return (
    <div className={css.firstBlock}>
      <h1 className={css.trackLogo}>AquaTrack</h1>
      <div className={css.yourDailyNorma}>
        <p>{dailyNormData / 1000} L</p>
        <span>My daily norma</span>
      </div>
      <div className={css.percentAvg}>
        <h4>Today</h4>
        <div
          className={css.percentLine}
          style={{
            background: `linear-gradient(to right, rgb(152, 103, 103) ${percentage}%, rgb(174, 174, 174) ${percentage}%)`,
          }}
        />
        <div className={css.percentsBlock}>
          <p>0%</p>
          <p>100%</p>
        </div>
      </div>
      <button className={css.addMore} onClick={addWater}>
        <span>+</span>
        Add Water
      </button>
    </div>
  );
}

export default TrackFirstBlock;
