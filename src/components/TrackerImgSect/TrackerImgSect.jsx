import css from './TrackerImgSect.module.css'
import { NavLink } from 'react-router-dom'
import Wallpaper from '../WallpaperSection/Wallpaper'
import Container from '../Container/Container'
import LeftContainer from '../Container/LeftContainer'

function TrackerImgSect() {

  return (
    <Container>
        <LeftContainer>
                <NavLink to="/" className={css.aquaLogo}>
                    AQUATRACK
                </NavLink>
            <div className={css.trackStartBlock}>
                <p className={css.recordCont}>
                    Record daily water intake and track
                </p>
                <h1 className={css.hOneCont}>
                    Water consumption tracker
                </h1>
                <p className={css.trackBtnBlock}>
                    <NavLink to="/signup" className={css.trackBtn}>Try tracker</NavLink>
                    <NavLink to="/login" className={css.signInBtn}>Log In</NavLink>
                </p>
            </div>
        </LeftContainer>
        <Wallpaper />
    </Container>
  )
}

export default TrackerImgSect