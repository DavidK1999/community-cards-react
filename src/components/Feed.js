import React, {useEffect, useState} from 'react';
import {Segment, Menu, Search} from 'semantic-ui-react';
import CardList from './CardList';
import { useDispatch, useSelector } from 'react-redux';
import {getFeedCards, getCards} from '../redux/actions/card';
const Feed = () => {
    const dispatch = useDispatch();
    const [feed, setFeed] = useState(true);
    const [global, setGlobal] = useState(false);
    const userPostCount = useSelector(state => state.user.user.createdPosts);
    const userUpvotedCount = useSelector(state => state.user.user.upvotedPosts);

    const toggleFeed = () => {
        setGlobal(false);
        setFeed(true);
    }

    const toggleGlobal = () => {
        setFeed(false);
        setGlobal(true);
    }

    useEffect(() => {
        if(feed) {
        dispatch(getFeedCards())
        }
      }, [dispatch, userPostCount, userUpvotedCount, feed]);
    
      useEffect(() => {
        if(global) {
        dispatch(getCards())
        }
      }, [dispatch, userPostCount, userUpvotedCount, global]);

    return (
        <>
        <Segment textAlign="center" id="search-segment"><Search/></Segment>
            <Menu id="feed-menu">
                <Menu.Item name="Your Feed" active={feed} onClick={toggleFeed}/>
                <Menu.Item name="All Cards" active={global} onClick={toggleGlobal } />
            </Menu>
            <div>
                <CardList />
            </div>
        </>
    );
}
 
export default Feed;