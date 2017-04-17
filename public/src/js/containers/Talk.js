import React from 'react';
import {fetchTalk} from '../actions/talksActions';
import {connect} from 'react-redux';

@connect((store) => {
        return {
            talk: store.talk.talk,
        }
})
export default class Talk extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchTalk())
    }

    render() {

        const {talk} = this.props;

        return (
            <div>
                <p>
                    {talk.text}
                </p>
                <small class="fr">{talk.user.username}</small>
                <br/>
                <button class="fr" onClick={() => false}>Next</button>
                <div class="clearfix"></div>
            </div>
        );
    }
}