import {NavLink} from 'react-router';
import './SideBar.css'

export const SideBar = () => {
    return (
        <aside className="sideBar">
            <h2 className='sideBarName'>Harry Potter</h2>
            <NavLink className='sideBarLink' to={'/characters'}>Characters</NavLink>
            <NavLink className='sideBarLink' to={'/spells'}>Spells</NavLink>
            <p className='sideBarText'>Test task for DevMood</p>
        </aside>
    )
}