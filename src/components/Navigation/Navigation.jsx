import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import { useLocation } from 'react-router-dom';
export const Navigation = () => {
    const location = useLocation();
    return (
        <ul className={css.navList}>
            <li >
                <NavLink className={css.linkNav} to='/' state={{ from: location }} >Home</NavLink>
            </li>
            <li>
                <NavLink className={css.linkNav} to='/tweets'>Tweets</NavLink>
            </li>
        </ul> 
    )
}