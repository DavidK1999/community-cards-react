import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getCards} from './redux/actions/card';
import Authenication from './components/Authentication';
import CardCreator from './components/CardCreator';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout';
import './styles/base.css';

const App = () => {
    const dispatch = useDispatch();
    const userPostCount = useSelector(state => state.user.user.createdPosts);
    const userUpvotedCount = useSelector(state => state.user.user.upvotedPosts);
    const userProfile = useSelector(state => state.user.userProfile);

    useEffect(() => {
        dispatch(getCards())
    }, [dispatch, userPostCount, userUpvotedCount]);
  return (
    <>
      <Authenication />
      <Layout/>
      <CardCreator/>
    </>
  );
}

export default App;
