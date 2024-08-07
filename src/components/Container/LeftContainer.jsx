import css from './Container.module.css'

function LeftContainer({children}) {
  return (
    <div className={css.trackBlock}>
        {children}
    </div>
  )
}

export default LeftContainer