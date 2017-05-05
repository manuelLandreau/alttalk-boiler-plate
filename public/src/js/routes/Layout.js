import React from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar';
import {fetchUser} from '../actions/userActions';

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        router: store.router
    };
})
export default class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchUser().then(userDispatch => {
            this.props.dispatch(userDispatch);
        });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div>
                    {this.props.children}
                </div>
                <footer class="pal">
                    Lorem Elsass ipsum lacus leverwurscht Wurschtsalad mamsell Gal.
                </footer>
            </div>
        );
    }
}
