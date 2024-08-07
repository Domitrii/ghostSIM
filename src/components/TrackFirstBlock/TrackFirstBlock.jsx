import { NavLink } from 'react-router-dom'
import css from './TrackFirstBlock.module.css'

function TrackFirstBlock() {
    const dailyNorma = 2
  return (
    <div className={css.firstBlock}>
        <NavLink to="/track" className={css.trackLogo}>
            AquaTrack
        </NavLink>
        <div className={css.yourDailyNorma}>
            <p>{dailyNorma} L</p>
            <span>My daily norma</span>
        </div>
        <div className={css.percentAvg}>
            <h4>Today</h4>
            <div className={css.percentLine} />
            <div className={css.percentsBlock}>
                <p>0%</p>
                <p>100%</p>
            </div>
        </div>
        <button className={css.addMore}>
                <span>+</span>
                Add Water
            </button>
    </div>
  )
}

export default TrackFirstBlock