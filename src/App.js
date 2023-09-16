import React from 'react';
import YourButton from './Layouts/YourButton'
import BuildButton from './Layouts/BuildButton';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { display } from './Redux/CrazyButton';


function App() {

  const dispatch = useDispatch();
  const displayOn = useSelector(state=> state.CreateButton.displayOn)

  return (
    <div className="App">
      <div className="App__buttons">
        <button className="app__button" onClick={()=>dispatch(display(true))}>Create Button</button>
        <button className="app__button" onClick={()=>dispatch(display(false))}>Buttons List</button>
      </div>
      {displayOn ? <BuildButton/> : <YourButton/> }
    </div>
  );
}

export default App;
