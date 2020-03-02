import React, {useEffect} from 'react';
import {Card, Icon, Menu, Dropdown, Label, Divider} from 'semantic-ui-react';
import CardManager from '../hooks/CardManager';
import reactStringReplace from 'react-string-replace';
import {getUserProfile} from '../redux/actions/user';
import {getUserProfileCards} from '../redux/actions/card';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/feed.css';
import { useHistory } from 'react-router-dom';

const ProfileCardList = ({profileUser, cards}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.user);

    const history = useHistory();
    // const cards = useSelector(state => state.card.filteredCards);
    console.log(cards);

    const {upvoteCard, follow} = CardManager();
    
    const followUser = user => {
        follow(user);
        dispatch(getUserProfile(user));
    }

    const upvoteProfile = card => {
        upvoteCard(card, card.created_by);
    }
    
    const cardsList = cards && cards.map((card, i) => {
        const username = card.created_by.username;
        
        return(
            <Card key={i} id="card">
                <Card.Content id="content">
                <Card.Header id="card-header">
                <Label id="user-label" onClick={() => history.replace(`/profile/${card.created_by.username}`)}>
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
                        { currentUser.following && !currentUser.following.includes(card.created_by._id) 
                        ?
                        <Dropdown.Item onClick={() => followUser(card.created_by)}><Icon name="user circle"/>Follow {username}</Dropdown.Item>
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
                        <Menu.Item icon="star outline" onClick={() => upvoteProfile(card)}/>
                    :
                        <Menu.Item icon="star" id="upvoted"/>
                    }
                    <Menu.Item icon="comment outline" onClick={()=>console.log(card)}/>
                    <button onClick={() => console.log(profileUser)}>USER</button>
                    <button onClick={() => console.log(currentUser)}>CURRENTUSER</button>
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