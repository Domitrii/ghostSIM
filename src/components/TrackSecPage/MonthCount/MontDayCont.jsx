import { useState } from 'react'
import css from './Month.module.css'

function MontDayCont({day, today}) {
    const isToday = day === today
  return (
    <div className={`${css.dayContElem} ${isToday ? css.today : (null)}`}>
        {day}
    </div>
  )
}

export default MontDayCont