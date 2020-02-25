import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm, deauthenticate } from '../redux/actions/user'
import { getUserProfile } from '../redux/actions/profile'
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
        history.replace(`profile/${userProfile.username}`)
    }

    const logout = () => {
        dispatch(deauthenticate());
        dispatch(getUserProfile({}));
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
                name="People who I follow "
                icon="users"
                onClick={() => handleForm('create')}
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
                

                {/* <Menu.Item id="sub-menu">
                    <Icon name="sign out"/>
                    <Icon name="users"/>
                    <Icon name="sticky note"/>
                    <Icon name="user circle"/>
                </Menu.Item> */}
                
                {/* <Dropdown
                text={userProfile.username}
                icon='user'
                pointing="left"
                button
                labeled
                className='icon'
                id="user-dropdown"
                >
                    <Dropdown.Menu id="user-dropdown-menu">
                        <Dropdown.Header icon='cog' content='Options' />
                        <Dropdown.Divider />
                        <Dropdown.Item icon='user circle' text='My Profile'/>
                        <Dropdown.Item icon='sticky note' text='My Cards'/>
                        <Dropdown.Item icon='users' text='People I Follow'/>
                        <Dropdown.Item 
                        icon='sign-out' 
                        text='Logout'
                        onClick={() => dispatch(deauthenticate())}
                    />
                    </Dropdown.Menu>
                </Dropdown>   */}



        </Menu>
    );
}
 
export default Navigation;