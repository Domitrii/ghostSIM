import css from './Container.module.css'

function Container({children}) {
  return (
    <div className={css.firsBlock}>
        {children}
    </div>
  )
}

export default Container