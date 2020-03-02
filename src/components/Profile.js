import React, {useEffect, useState} from 'react';
import { Header, Image, Icon, Card, Label } from 'semantic-ui-react';
import '../styles/profile.css';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileCardList from './ProfileCardList';
import { getUserProfile } from '../redux/actions/profile';

const Profile = () => {
    
    const history = useHistory();
    const [user, setUser] = useState({});
    const [allCards, setAllCards] = useState([]);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.user);
    const createdPosts = user.createdPosts;
    const userURL = history.location.pathname;
    let upvotes = 0;

    allCards.forEach(card => {
        upvotes += card.upvotes.length;
    });

    const index = () => {
        dispatch(getUserProfile({}));
        history.push("/");
    }

    useEffect(() => {
        const getProfile = async () => {
            console.log("PROFILE");
            const profile = await fetch(`http://localhost:8000/user${userURL}`);
            const parsedProfile = await profile.json();
            setUser(parsedProfile);
        }

        const getProfileCards = async () => {
            console.log("CARDS")
            const cards = await fetch(`http://localhost:8000/card${userURL}`);
            const parsedCards = await cards.json();
            console.log(parsedCards);
            setAllCards(parsedCards);

        }

        getProfile();
        getProfileCards();
    }, [userURL, setUser, currentUser.upvotedPosts, currentUser.createdPosts]);
    

    // TODO loop through the user profile posts and add together their upvotes
    return (
        <>
        <Header as="h2" id="user-summary-header">
            <div id="user-summary">
                <h3>{user.username}</h3>
            </div>
            <Icon name="arrow circle left" onClick={() => index()}/>
        </Header>
        <Image src="https://www.plentyofplaces.com/wp-content/uploads/sites/599/2016/10/coloradomountains.png" fluid id="banner"/>
        <Card id="user-summary-details">
        <Card.Header>
            <Icon name="user circle"/>
        </Card.Header> 
            <Card.Content extra>{user.email}</Card.Content>
            <Card.Content id="stats">
                <Label><Icon name="users"/>Followers: {user.followers && user.followers.length}</Label>
                <Label><Icon name="user plus"/>Following {user.following && user.following.length}</Label>
                <Label><Icon name="star"/>Upvotes: {upvotes}</Label>
                <Label><Icon name="sticky note"/>Cards {allCards.length}</Label>
            </Card.Content>
        </Card>
        <div>
            <ProfileCardList profileUser={user} cards={allCards}/>
        </div>
        </>

    );
}
 
export default Profile;