import React from 'react';
import './App.css';
import './styles/SubMenusStyle.css';
import NavBar from './component/NavBar';

import PersonId from './component/contents/PersonId';
import BottomContent from './component/main/BottomContent';

import Routing from './Routing';


function App() {
  return (
    <>
      <div className="topMenu">
        <div className="topMain">
          <NavBar />
        </div>
      </div>
      <div className='subContainer'>
        <PersonId />
        <div className="container">
          <Routing />
        </div>
      </div>
      <BottomContent />
    </>
  );
}

export default App;
