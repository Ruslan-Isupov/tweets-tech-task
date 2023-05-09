import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
export const Navigation = () => {
    return (
        <ul className={css.navList}>
            <li >
                <NavLink className={css.linkNav} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={css.linkNav} to='/tweets'>Tweets</NavLink>
            </li>
        </ul>
    )
}