import css from './StartBlock.module.css'
import phone from '../images/phone.png'
import icon from '../images/icons.svg#icon-user'

function StartBlock() {
  return (
    <div className={css.block}>
        <div className={css.ButtonBlock}>
            <button>Button</button>
        </div>
        {/* <div className={css.phone}>
            <div className={css.mainScreen}>
                <div className={css.topLine}></div>
                <div className={css.apps}>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                    <div className={css.appContainer}></div>
                </div>
            </div>
            <div className={css.phoneDownBlock}>
                <div className={`${css.appContainer} ${css.appContainerWhite}`}></div>
                <div className={`${css.appContainer} ${css.appContainerGreen}`}>
                <svg className={css.icon}>
                <symbol id="icon-bubble" className={css.bubble} viewBox="0 0 32 32">
                    <path d="M16 2c8.837 0 16 5.82 16 13s-7.163 13-16 13c-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z"></path>
                </symbol>
                </svg>
                </div>
                <div className={`${css.appContainer} ${css.appContainerWhite}`}></div>
                <div className={`${css.appContainer} ${css.appContainerWhite}`}></div>
            </div>
        </div> */}
        <div>
            <img src={phone} alt="Phone" />
        </div>
    </div>
  )
}

export default StartBlock