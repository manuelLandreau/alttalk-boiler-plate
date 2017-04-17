import React from 'react';
import {connect} from 'react-redux'
import LoginBox from './LoginBox';
import UserMenu from '../components/UserMenu';
import PlusIcon from '../icons/PlusIcon';
import {logout} from '../actions/authActions';
import Ratio from '../components/Ratio';
import {Link} from 'react-router-dom';

@connect((store) => {
    return {
        username: store.user.user.username,
        ratio: store.ratio.ratio,
        isUserMenuDropped: store.ui.isUserMenuDropped
    };
})
export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {username, ratio, isUserMenuDropped, dispatch} = this.props;

        return (
            <header class="pas">
                <div class="fl">
                    <Link to="/">
                        <h2><span class="logo">Alt</span>Talk</h2>
                    </Link>
                </div>
                <span class="fr">
                    {username ?
                        <span>
                            <Ratio ratio={ratio}/>
                            <UserMenu username={username}
                                      isDropped={isUserMenuDropped}
                                      dropMenu={() => dispatch({type: 'DROP_USER_MENU'})}
                                      logout={() => dispatch(logout)}
                            />
                        </span>:
                        <LoginBox/>}
                </span>
                <Link to="/add">
                    <button class="fr">
                        <PlusIcon width="12" height="12" color="#000"/><span class="tiny-hidden"> Add a talk</span>
                    </button>
                </Link>
                <hr class="hr_header"/>
                <div class="clearfix"></div>
            </header>
        )
    }
}