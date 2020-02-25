import React from 'react';
import {toggleForm} from '../redux/actions/user';
import CardManager from '../hooks/CardManager';
import {Modal, Button, Form, TextArea} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

const CardCreator = () => {
    const dispatch = useDispatch();
    const formType = useSelector(state => state.user.form);
    const formStatus = true ? formType === 'create' || formType === 'edit' : false
    const {handleSubmit, handleInputChange} = CardManager();

    const closeModal = () => {
        dispatch(toggleForm(''));
    }

    return (
        <Modal open={formStatus} closeIcon onClose={closeModal} centered={false}>
        <Modal.Header> Create a Card</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field
                name="body"
                control={TextArea}
                label="Your Card"
                placeholder="What's on your mind"
                onChange={handleInputChange}
            />
          <Button>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
}
 
export default CardCreator;