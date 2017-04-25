import React from 'react';
import CaretIcon from '../icons/CaretIcon';

export default class UserMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {dropMenu, username, isDropped, logout} = this.props;

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
        );
    }
}