import css from './Header.module.css'
function Header() {
  return (
    <header className={css.header}>
        <div className={css.logo}>
            Logo
        </div>
        <ul className={css.links}>
            <li>Usage</li>
            <li>Options</li>
            <li>Location</li>
            <li>Contacts</li>
        </ul>
        <div className={css.lastBlockHeader}>
            <svg className={css.bubble}>
                <use href="../icons/icons.svg#icon-bubble"></use>
            </svg>
            <svg className={css.user}>
                <use href="../icons/icons.svg#icon-user"></use>
            </svg>
        </div>
    </header>
  )
}

export default Header