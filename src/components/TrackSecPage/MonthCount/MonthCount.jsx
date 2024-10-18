import { getDayFromDateStr, getMonthFromDateStr, getYearFromData } from '../../../helper/FindDateandMonth'
import MontDayCont from './MontDayCont'
import css from './Month.module.css'

function MonthCount({selectDay, onSelect}) {
    const clickData = (d) => {
      let normDate = String(d).padStart(2, "0")
      onSelect(`${year}-${month}-${normDate}`)
    }
    let month = getMonthFromDateStr(selectDay)
    let data = new Date()
    let year = data.getFullYear()
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate()
    let date = getDayFromDateStr(selectDay)
    let numb = daysInMonth(data.getFullYear(), month)
    let dates = Array.from({length: numb}, (_, index) => index + 1)

  return (
    <div className={css.dayCont}>
    {dates.map(day => {
      return <MontDayCont day={day} key={day} today={Number(date)} click={clickData}  />
    })}    
    </div>
  )
}

export default MonthCount