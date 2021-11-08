import React from 'react';
import Home from './components/Home/index';
import Aside from './components/Aside/index';
import Modal from './components/Modal/index';
import {AppProvider} from './components/Context'

function App() {
  return (
    <>
      <AppProvider>
        <Home />
        <Aside />
        <Modal />
      </AppProvider>
    </>
  );
}

export default App;
