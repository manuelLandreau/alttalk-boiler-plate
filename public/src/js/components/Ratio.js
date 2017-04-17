import React from 'react'

export default class Ratio extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.ratio}
            </div>
        );
    }
}