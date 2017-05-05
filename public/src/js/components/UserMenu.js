import React from 'react';
import CaretIcon from '../icons/CaretIcon';

const UserMenu = ({dropMenu, username, isDropped, logout}) => {

    return (
        <div>
            <div class="absolute menu-overlay" style={{display : isDropped ? 'block' : 'none'}} onClick={dropMenu}></div>
            <div class="relative">
                <button class="dropdown_button txtleft" onClick={dropMenu}>{username} <CaretIcon width="8" height="8"/></button>
                <ul class="dropdown" style={{display : isDropped ? 'block' : 'none'}}>
                    <li>Parameters</li>
                    <a href="#" onClick={logout}><li>Logout</li></a>
                </ul>
            </div>
        </div>
    )
};

export default UserMenu;