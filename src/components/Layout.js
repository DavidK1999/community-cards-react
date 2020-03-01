import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCards} from '../redux/actions/card';
import { Grid, Segment } from 'semantic-ui-react';
import Navigation from './Navigation';
import Feed from './Feed';
import Profile from './Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {getUserProfile} from '../redux/actions/profile';

import '../styles/layout.css';

const Layout = () => {
    
    return (

        <Router>
            <Grid columns={3} divided id="master-grid">
                <Grid.Row>
                <Grid.Column id="navigation-column">
                    <Navigation/>
                </Grid.Column>
                <Grid.Column textAlign="center" id="feed-column">
                    <Route exact path="/" 
                    render={(props) => <Feed location={props.location}/>}/>
                    {/* // TODO ADD A FETCH IN THE PROFILE COMPONENT THAT FETCHES THE BACKEND ON MOUNT */}
                    <Route exact path="/profile/:username" component={Profile}/>
                </Grid.Column>
                <Grid.Column>
                    <Segment textAlign="center">Yo</Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
}
 
export default Layout
