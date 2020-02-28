import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCards, getFeedCards} from './redux/actions/card';
import Authenication from './components/Authentication';
import CardCreator from './components/CardCreator';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout';
import './styles/base.css';

const App = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.card.cards);
    const userPostCount = useSelector(state => state.user.user.createdPosts);
    const userUpvotedCount = useSelector(state => state.user.user.upvotedPosts);
    console.log(cards);

    // useEffect(() => {
    //   dispatch(getFeedCards())
    // }, [dispatch, userPostCount, userUpvotedCount]);
  
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
