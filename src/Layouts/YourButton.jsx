import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { valor } from '../Redux/buttonSelection';
import './YourButton.css';
import Badge from '../Components/Badges/Badge';
import CreateButton from '../Components/Buttons/CreateButton';
import buttonList from '../Redux/buttons.json';

function YourButton() {

  // Showing up the data
  const dispatch = useDispatch();
  const list = useSelector(state=> state.buttons.list)
  const modifyList = list.map(items=>{return (<Badge key={items.key} button={<CreateButton stylefix={items.styleCss} id={items.id} key={items.key} copy="Copy" copied="Copied!"/>}/>)})
  
  //function for storing the data
  const ShowButtons = (key) => {
    const lista = buttonList;

    switch(key){

      case "all":
        let buttonAll = [];
        lista.buttons.map(item=>{;
            return buttonAll.push(item)
        });
        dispatch(valor(buttonAll));
        break;

      case "minimalist":
        let buttonMini = [];
        lista.buttons.map(item=>{
          if(item.model === 'minimalist') return buttonMini.push(item)
        return buttonMini});
        dispatch(valor(buttonMini));
        break;

      case "2d":
        let button2d = [];
        lista.buttons.map(item=>{
          if(item.model === '2d') return button2d.push(item)
        return button2d});
        dispatch(valor(button2d));
        break;

      case "3d":
          let button3d = [];
          lista.buttons.map(item=>{
            if(item.model === '3d') return button3d.push(item)
          return button3d});
          dispatch(valor(button3d));
          break;
      case "hover":
        let buttonHover = [];
          lista.buttons.map(item=>{
            if(item.model === 'hover') return buttonHover.push(item)
          return buttonHover});
          dispatch(valor(buttonHover));
          break;
      default: console.log("press a button");
    }
    return console.log("it works")
}

  return (
    <div className="button">
      <div className="buttons__selection">
      <button className="select__button" onClick={()=>ShowButtons("all")}>All</button>
      <button className="select__button" onClick={()=>ShowButtons("minimalist")}>Minimalist</button>
      <button className="select__button" onClick={()=>ShowButtons("2d")}>2D</button>
      <button className="select__button" onClick={()=>ShowButtons("3d")}>3D</button>
      <button className="select__button" onClick={()=>ShowButtons("hover")}>Hover</button>
      </div>
      <div className="buttons__show">
        {modifyList}
      </div>
    </div>
  );
}

export default YourButton;