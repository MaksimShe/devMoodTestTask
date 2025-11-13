import {NavLink} from 'react-router';
import './SideBar.css'
import classNames from "classnames";

export const SideBar = () => {
    return (
        <aside className="sideBar">
            <h2 className='sideBarName'>Harry Potter</h2>

            <NavLink className={
                ({ isActive }) =>
                    classNames('sideBarLink',
                        {'sideLinkIsActive': isActive}
                    )}
                     to={'/characters'}>
                Characters
            </NavLink>
            <NavLink className={
                ({ isActive }) =>
                    classNames('sideBarLink',
                        {'sideLinkIsActive': isActive}
                    )}
                     to={'/spells'}>
                Spells
            </NavLink>

            <p className='sideBarText'>Test task for DevMood</p>
        </aside>
    )
}