import { useEffect, useState } from 'react';
import css from './TrackFirstBlock.module.css';
import { useSelector } from 'react-redux';
import { selectWaterPerDay } from '../../redux/water/selectors';

function TrackFirstBlock({ userData, addWater, dailyNormData, waterAmount }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (dailyNormData && waterAmount) {
      console.log(dailyNormData)
      console.log(waterAmount)
      const percent = (waterAmount / dailyNormData) * 100;
      setPercentage(percent);
    }
  }, [dailyNormData, waterAmount]);
  
  

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
            background: `linear-gradient(to right, #9be1a0 ${percentage}%, rgb(174, 174, 174) ${percentage}%)`,
          }}
        />
        <div className={css.percentsBlock}>
            <p>{percentage.toFixed(1)}%</p>
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
