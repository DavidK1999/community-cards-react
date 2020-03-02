import React from 'react';
import Authenication from './components/Authentication';
import CardCreator from './components/CardCreator';
import 'semantic-ui-css/semantic.min.css'
import Layout from './components/Layout';
import Entry from './components/Entry';
import './styles/base.css';

const App = () => {

    return (
    <>
      <Entry/>
      {/* <Authenication />
      <Layout/>
      <CardCreator/> */}
    </>
  );
}

export default App;
