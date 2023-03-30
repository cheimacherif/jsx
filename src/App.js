import React from 'react';
import Photo from './profile/Photo';
import FullName from './profile/FullName';
import Adresse from './profile/Adresse';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='chei'>
     <Photo></Photo>
     <FullName></FullName>
     <Adresse></Adresse> 
      </div>
      </div>
  );
}

export default App;
