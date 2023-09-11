import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { valor } from './Redux/buttonSelection';
import './App.css';
import Badge from './Components/Badges/Badge';
import CreateButton from './Components/Buttons/CreateButton';
import buttonList from './Redux/buttons.json';

function App() {

  const dispatch = useDispatch();
  const list = useSelector(state=> state.buttons.list)

  const ShowButtons = (key) => {
    const lista = buttonList;
    switch(key){
      case "all":
        let buttonAll = [];
        lista.buttons.map(item=>{
            return buttonAll.push(<Badge key={item.key} button={<CreateButton stylefix={item.styleCss} id={item.id} key={item.key}/>}/>)
        });
        dispatch(valor(buttonAll));
        break;
      case "minimalist":
        let buttonMini = [];
        lista.buttons.map(item=>{
          if(item.model === 'minimalist')
            return buttonMini.push(<Badge key={item.key} button={<CreateButton stylefix={item.styleCss} id={item.id} key={item.key}/>}/>)
        });
        dispatch(valor(buttonMini));
        break;
        default: return;
    }
}

  return (
    <div className="App">
      <div className="butons">
      <button onClick={()=>ShowButtons("all")}>all</button>
      <button onClick={()=>ShowButtons("minimalist")}>minimalist</button>
      <button onClick={()=>ShowButtons("2d")}>2d</button>
      <button onClick={()=>ShowButtons("3d")}>3d</button>
      </div>
      {list}
    </div>
  );
}

export default App;
