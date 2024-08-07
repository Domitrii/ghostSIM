import { getDayFromDateStr, getMonthFromDateStr } from '../../../helper/FindDateandMonth'
import MontDayCont from './MontDayCont'
import css from './Month.module.css'

function MonthCount({selectDay}) {
    let month = getMonthFromDateStr(selectDay)
    let data = new Date()
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate()
    let date = getDayFromDateStr(selectDay)
    let numb = daysInMonth(data.getFullYear(), month)
    let dates = Array.from({length: numb}, (_, index) => index + 1)

  return (
    <div className={css.dayCont}>
    {dates.map(day => {
      return <MontDayCont day={day} key={day} today={Number(date)} />
    })}    
    </div>
  )
}

export default MonthCount