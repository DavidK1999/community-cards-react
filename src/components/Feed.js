import React from 'react';
import {Segment, Menu, Search} from 'semantic-ui-react';
import CardList from './CardList';
const Feed = () => {

    return (
        <>
        <Segment textAlign="center" id="search-segment"><Search/></Segment>
            <Menu id="feed-menu">
                <Menu.Item name="Your Feed"/>
                <Menu.Item name="All Cards" />
            </Menu>
            <div>
                <CardList />
            </div>
        </>
    );
}
 
export default Feed;