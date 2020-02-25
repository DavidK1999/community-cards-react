import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {toggleForm} from '../redux/actions/user';
import { Modal, Form, Button } from 'semantic-ui-react';
import Authenticate from '../hooks/Authenticate';

const Authentication = () => {
    const formType = useSelector(state => state.user.form);
    const register = formType === 'register';
    const formStatus = true ? formType === 'register' || formType === 'login' : false
    const dispatch = useDispatch()
    const { handleInputChange, handleSubmit } = Authenticate();

    const closeModal = () => {
        dispatch(toggleForm(''));
    }

    return (
        <Modal open={formStatus} closeIcon onClose={closeModal}>
            <Modal.Header>{register ? "Register" : "Login"}</Modal.Header>
            <Modal.Content>
                <Form onSubmit={(e) => handleSubmit(e, formType)}>
                {register ?
                    <>
                        <Form.Field>
                            <label>Username</label>
                            <input 
                            type="text" 
                            name="username"
                            onChange={handleInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input type="email" name="email"
                            onChange={handleInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" name="password"
                            onChange={handleInputChange}
                            />
                        </Form.Field>
                    </>
                    
                    :
                    
                    <>   
                        <Form.Field>
                            <label>Email</label>
                            <input type="email" name="email"
                            onChange={handleInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" name="password"
                            onChange={handleInputChange}
                            />
                        </Form.Field>

                    </>

                }

                    <Button> Authenticate </Button>
                </Form>

            </Modal.Content>
        </Modal>
    );
}
 
export default Authentication;