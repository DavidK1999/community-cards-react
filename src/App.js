import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCards, getUserProfileCards} from './redux/actions/card';
import Authenication from './components/Authentication';
import CardCreator from './components/CardCreator';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout';
import './styles/base.css';
import { getUserProfile } from './redux/actions/user';

const App = () => {
    const dispatch = useDispatch();
    const profileUser = useSelector(state => state.user.userProfile);
    const cards = useSelector(state => state.card.cards);
    console.log(profileUser);
    const userPostCount = useSelector(state => state.user.user.createdPosts);
    const userUpvotedCount = useSelector(state => state.user.user.upvotedPosts);
    const userFollowingCount = useSelector(state => state.user.user.followingCount);
    const profileUserPostCount = useSelector(state => state.user.userProfile.createdPosts);

    useEffect(() => {
      dispatch(getCards())
    }, [dispatch, userPostCount, userUpvotedCount]);


    // useEffect(() => {
    //   console.log(userFollowingCount);
    //   dispatch(getUserProfileCards(profileUser))
    //   // dispatch(getUserProfile(profileUser))
    // }, [dispatch, profileUser, profileUserPostCount, userUpvotedCount, userFollowingCount]);
  
    return (
    <>
    <button onClick={() => console.log(cards)}>CARDS</button>
      <Authenication />
      <Layout/>
      <CardCreator/>
    </>
  );
}

export default App;
