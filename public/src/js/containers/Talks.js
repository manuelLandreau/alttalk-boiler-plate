import React from 'react';
import {fetchTalks} from '../actions/talksActions';
import {connect} from 'react-redux';
import Talk from '../components/Talk';

@connect((store) => {
        return {
            talks: store.talk.talks,
        }
})
export default class Talks extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchTalks())
    }

    render() {
        const {talks} = this.props;

        return (
            <div>
                <p>
                    List controle
                </p>
                <div>
                    {
                        talks.length > 1 ?
                            talks.map((talk) => <Talk talk={talk} user={talk.user} key={talk._id}/>) :
                            <div class="flex-container">
                                <p class="flex-item-center">There is no talks..</p>
                            </div>
                    }
                </div>
            </div>
        );
    }
}