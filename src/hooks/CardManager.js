import {useState} from 'react';
import { upvotePost, getUserProfileCards } from '../redux/actions/card';
import { createCard, storeUpvote, followUser, followedUser } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

const CardManager = () => {
    const [inputs, setInputs] = useState({});
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();


    const handleSubmit = async e => {
        console.log('HI');
        // TODO make this the async part not the actions
        dispatch(createCard(inputs));
    }

    const handleInputChange = e => {
        let regex = /[#]\S[a-zA-Z]*/g;
        const duplicateText = e.currentTarget.value;
        const tagged = duplicateText.match(regex);
        let strippedTags = tagged && tagged.map(tag => tag.substring(1));
        inputs.tags = strippedTags;
        setInputs({...inputs, [e.target.name] : e.target.value, username: user.username});
    }

    const upvoteCard = async (card, user) => {
        dispatch(storeUpvote(card));
        dispatch(upvotePost(card))
        // setTimeout(() => dispatch(getUserProfileCards(user)));
    }

    const follow = (user, callback) => {
        dispatch(followUser(user));
        dispatch(followedUser(user));
    }

    return {handleSubmit, handleInputChange, upvoteCard, follow}
}
 
export default CardManager;