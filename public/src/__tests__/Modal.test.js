import React from 'react';
import Modal from '../js/components/Modal';
import LoginBox from '../js/containers/LoginBox';
import renderer from 'react-test-renderer';
import store from '../js/store';
import {shallow} from 'enzyme';

test('Modal simple Snapshot test', () => {
    const component = renderer.create(
        <Modal isModalOpen={false} closeModal={() => false} style={{}}></Modal>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Modal click test', () => {
    const component = renderer.create(
        <LoginBox store={store}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.handleOpenModal;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.handleCloseModal;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Registration test', () => {
    const component = renderer.create(
        <LoginBox store={store}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.handleOpenModal;
    tree.props.handleFormChange;
    tree.props.handleRegister;
});