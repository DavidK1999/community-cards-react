import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm, deauthenticate } from '../redux/actions/user'
import { clearCards } from '../redux/actions/card'
import { getUserProfile } from '../redux/actions/user'
import {getUserProfileCards} from '../redux/actions/card';
import { Menu, Header, Icon } from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';
import '../styles/navigation.css'

const Navigation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userProfile = useSelector(state => state.user.user); 
    const loggedStatus = useSelector(state => state.user.loggedIn);

    const handleForm = form => {
        console.log(form);
        dispatch(toggleForm(form));
    }

    const redirect = () => {
        dispatch(getUserProfile(userProfile));
        dispatch(getUserProfileCards(userProfile));
        history.replace(`profile/${userProfile.username}`)
    }

    const logout = () => {
        dispatch(deauthenticate());
        dispatch(getUserProfile({}));
        dispatch(clearCards());
    }


    return (
        <Menu id="navigation" secondary vertical>

                <Header as="h4" icon id="logo">
                    <Icon name="sticky note"/>
                </Header>
                
                <Menu.Item
                name="Create a card"
                icon="plus"
                onClick={() => handleForm('create')}
                />
                
                <Menu.Item
                name="My Profile"
                icon="user circle"
                onClick={() => redirect()}
                />
                
                <Menu.Item
                name="SignOut "
                icon="sign out"
                onClick={() => logout()}
                />

                <Menu.Item
                name="Login"
                onClick={() => handleForm('login')}
                />
                
                <Menu.Item
                name="Register"
                onClick={() => handleForm('register')}
                />
        </Menu>
    );
}
 
export default Navigation;