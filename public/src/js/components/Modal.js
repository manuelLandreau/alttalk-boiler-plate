import React from 'react';

export default class Modal extends React.Component {

    static propTypes = {
        isModalOpen: React.PropTypes.bool.isRequired,
        closeModal: React.PropTypes.func.isRequired,
        style: React.PropTypes.shape({
            modal: React.PropTypes.object,
            overlay: React.PropTypes.object
        })
    };

    constructor(props) {
        super(props);

        this.outerStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            zIndex: 1
        };

        // default style
        this.style = {
            modal: {
                position: "relative",
                width: 500,
                padding: '15px 20px',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                margin: '40px auto',
                borderRadius: 3,
                zIndex: 2,
                textAlign: 'left',
                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
                ...this.props.style.modal,
            },
            overlay: {
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundColor: 'rgba(0,0,0,0.5)',
                ...this.props.style.overlay
            }
        }
    }

    // Render Modal
    render() {
        return (<div style={{...this.outerStyle, display: this.props.isModalOpen ? 'block' : 'none'}}>
            <div style={this.style.overlay} onClick={this.props.closeModal}></div>
            <div onClick={this.props.closeModal}></div>
            <div style={this.style.modal}>
                {this.props.children}
            </div>
        </div>)
    }
}