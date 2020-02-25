import React, {useEffect} from 'react';
import {Card, Icon, Menu, Dropdown, Label, Divider} from 'semantic-ui-react';
import CardManager from '../hooks/CardManager';
import reactStringReplace from 'react-string-replace';
import {getUserProfile} from '../redux/actions/user';
import {getUserProfileCards} from '../redux/actions/card';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/feed.css';
import { useHistory } from 'react-router-dom';

const ProfileCardList = () => {
    const dispatch = useDispatch();
    const filteredCards = useSelector(state => state.card.filteredCards);
    const userUpvotedCount = useSelector(state => state.user.user.upvotedPosts);
    const history = useHistory();
    const cards = useSelector(state => state.card.filteredCards);

    // TODO Change it back so that the user Profile is loaded into its own state
    // TODO That way you you can always get the current profile information
    const currentUser = useSelector(state => state.user.userProfile);
    const {upvoteCard, follow} = CardManager();
    
    const redirect = user => {
        dispatch(getUserProfile(user));
        dispatch(getUserProfileCards(user));
        history.push(`profile/${user.username}`);
    }
    
    useEffect(() => {
        dispatch(getUserProfileCards(currentUser));
    }, [dispatch, userUpvotedCount.length, currentUser]);
    
    const cardsList = cards && cards.map((card, i) => {
        const user = card.created_by;
        const username = card.created_by.username;
        
        return(
            <Card key={i} id="card">
                <Card.Content id="content">
                <Card.Header id="card-header">
                <Label id="user-label" onClick={() => redirect(card.created_by)}>
                    <Icon name="user"/>
                    {card.created_by.username}
                </Label>
                <Dropdown
                icon='chevron down'
                button
                className='icon'
                pointing="up"
                id="post-dropdown"
                >
                    <Dropdown.Menu id="user-dropdown-menu">
                        <Dropdown.Header icon='cog' content='Options' />
                        <Dropdown.Divider />
                        {currentUser.following && !currentUser.following.includes(card.created_by._id) 
                        ?
                        <Dropdown.Item onClick={() => follow(card.created_by)}><Icon name="user circle"/>Follow {username}</Dropdown.Item>
                        :
                        <Dropdown.Item><Icon name="check"/>Following</Dropdown.Item>
                        }

                        <Dropdown.Item icon='bell slash'><Icon name="bell slash"/>Mute</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
                

                </Card.Header>
                <Card.Meta>
                    
                </Card.Meta>
                <Card.Description id="body-of-card">
                    {reactStringReplace(card.body, /(#\S[a-zA-Z]*)/gi, (match, i) => <button key={i} className="tag">{match}</button>)}
                </Card.Description>
                <Card.Meta>
                <span className='date'>{card.timestamp}</span>
                </Card.Meta>
                <Divider/>
                <Card.Meta>
                    Upvotes: {card.upvotes.length}
                </Card.Meta>
                <Divider/>
                <Menu id="card-bar" secondary>
                    {!card.upvotes.includes(currentUser._id)  
                    ?
                        <Menu.Item icon="star outline" onClick={() => upvoteCard(card)}/>
                    :
                        <Menu.Item icon="star" id="upvoted"/>
                    }
                    <Menu.Item icon="comment outline" onClick={()=>console.log(card.upvotes)}/>
                </Menu>
                </Card.Content> 
            </Card>
        )
    });
    return (
        <div id="ProfileCardList">
            {cardsList}
        </div>
    );
}
 
export default ProfileCardList;