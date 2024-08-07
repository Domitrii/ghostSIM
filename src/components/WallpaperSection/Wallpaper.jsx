import customer12 from '../images/customers/customers1-tab-desc@2x.png'
import customer22 from '../images/customers/customers2-tab-desc@2x.png'
import customer32 from '../images/customers/customers3-tab-desc@2x.png'
import css from './Wallpaper.module.css'

function Wallpaper() {
  return (
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
  )
}

export default Wallpaper