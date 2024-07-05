import { lazy, useState } from 'react'
import css from './TrackerImgSect.module.css'
import customer12 from '../images/customers/customers1-tab-desc@2x.png'
import customer22 from '../images/customers/customers2-tab-desc@2x.png'
import customer32 from '../images/customers/customers3-tab-desc@2x.png'
import SignIn from '../SignIn/SignIn'
import Login from '../LogIn/Login'

function TrackerImgSect() {
    const [signIn, setSignIn] = useState(false)
    const [logIn, setLogIn] = useState(false)

    const handleLogIn = () => {
        setLogIn(true)
        setSignIn(false)
    }

    const handleSignIn = () => {
        setSignIn(true)
        setLogIn(false)
    }

    const handleMainPage = () => {
        setSignIn(false)
        setLogIn(false)
    }

  return (
    <div className={css.firsBlock}>
        <div className={css.trackBlock}>
            <h2 className={css.aquaLogo} onClick={handleMainPage}>
                    AQUATRACK
            </h2>
            {!signIn && !logIn && (
            <div className={css.trackStartBlock}>
                <p className={css.recordCont}>
                    Record daily water intake and track
                </p>
                <h1 className={css.hOneCont}>
                    Water consumption tracker
                </h1>
                <p className={css.trackBtnBlock}>
                    <button className={css.trackBtn} onClick={handleSignIn}>Try tracker</button>
                    <button className={css.signInBtn} onClick={handleLogIn}>Log In</button>
                </p>
            </div>
            )} 
            {signIn && <SignIn />}
            {logIn && <Login />}
        </div>
        <div className={css.ImgBlock}>
            <div className={css.reviews}>
                <div>
                    <img
                        className={css.customerPic}
                        src={`${customer12}`}
                        alt="mark"
                        loading="lazy"
                        />
                    <img
                        className={css.customerPic}
                        src={`${customer22}`}
                        alt="mark"
                        loading="lazy"
                        />
                    <img
                        className={css.customerPic}
                        src={`${customer32}`}
                        alt="mark"
                        loading="lazy"
                        />
                 </div>
                 <p className={css.happyBlock}>
                    Our 
                    <span className={css.greenCont}>
                        happy
                    </span>
                    <br />
                    <span className={css.greenCont}>
                        92
                    </span>
                    customers
                </p>
            </div>
            <div className={css.smallTitles}>
                <div className={css.SmTitle}> <p className={css.titleCircle}></p>  Habit drive</div>
                <div className={css.SmTitle}> <p className={css.titleCircle}></p>  View statistics</div>
                <div className={css.SmTitle}> <p className={css.titleCircle}></p>  Personal rate setting </div>
            </div>
        </div>
    </div>
  )
}

export default TrackerImgSect