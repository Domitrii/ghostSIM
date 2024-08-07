import css from './NotFound.module.css'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className={css.whoopsSect}>
        <div className={css.backBottle}>
            <span className={css.whoopsText}>Whoops!</span>
            <span className={css.notFText}>Page not found</span>
            <NavLink className={css.homePageBtn} to="/">Home</NavLink>
        </div>
    </div>
  )
}

export default NotFound