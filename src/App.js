import React from 'react';
import YourButton from './Layouts/YourButton'
import BuildButton from './Layouts/BuildButton';
import Clipboard from './Components/Clipboard/Clipboard';
import Frame from './Assets/frame.jpg'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { display } from './Redux/CrazyButton';
import { clipboards } from './Redux/buttonSelection';

function App() {

  const dispatch = useDispatch();
  const displayOn = useSelector(state=> state.CreateButton.displayOn)
  const clipboards = useSelector(state=>state.buttons.clipboard)
  console.log(clipboards)
  return (
    <div className="App">
      <div className="App__buttons">
        <button className="app__button" onClick={()=>dispatch(display(true))}>Create Button</button>
        <button className="app__button" onClick={()=>dispatch(display(false))}>Buttons List</button>
      </div>
      {displayOn ? <BuildButton/> : <YourButton/> }
      {clipboards ? <Clipboard/> : console.log("no")}
    </div>
  );
}

export default App;
