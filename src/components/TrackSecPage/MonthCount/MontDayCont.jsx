import { useState } from 'react'
import css from './Month.module.css'

function MontDayCont({day, today, click}) {
    const isToday = day === today
  return (
    <div className={`${css.dayContElem} ${isToday ? css.today : (null)}`} onClick={() => click(day)}>
        {day}
    </div>
  )
}

export default MontDayCont