import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { valor } from '../Redux/buttonSelection';
import './YourButton.css';
import Badge from '../Components/Badges/Badge';
import CreateButton from '../Components/Buttons/CreateButton';
import buttonList from '../Redux/buttons.json';

function YourButton() {

  // Initializing hooks for accessing state and dispatch function
  const dispatch = useDispatch();
  const list = useSelector(state=> state.buttons.list);

  // Mapping over button list to create Badge components
  const modifyList = list.map(items=>{return (<Badge key={items.key} button={<CreateButton stylefix={items.styleCss} id={items.id} key={items.key} copied={"Copied!"}/>}/>)})
  

// Function to filter buttons based on a key
function buttonFilter(key){
  let buttonSelected = []; // Initialize an empty array to store selected buttons
  const buttonListJSON = buttonList; // Get the button list data from JSON file

  // Check if the key is not 'all'
  if(key !== 'all'){
      // If not 'all', filter buttons based on the key
      buttonListJSON.buttons.map(item => {
          // If the model of the button matches the key, add it to buttonSelected array
          if(item.model === key) buttonSelected.push(item);
          return buttonSelected; // Return the updated buttonSelected array
      });
      dispatch(valor(buttonSelected)); // Dispatch the filtered buttons
  } else {
      // If key is 'all', include all buttons
      buttonListJSON.buttons.map(item => {
          buttonSelected.push(item); // Add each button to buttonSelected array
          return buttonSelected; // Return the updated buttonSelected array
      });
      dispatch(valor(buttonSelected)); // Dispatch all buttons
  }
}

  return (
    <div className="button">
      <div className="buttons__selection">
      <button className="select__button" onClick={()=>buttonFilter("all")}>All</button>
      <button className="select__button" onClick={()=>buttonFilter("minimalist")}>Minimalist</button>
      <button className="select__button" onClick={()=>buttonFilter("2d")}>2D</button>
      <button className="select__button" onClick={()=>buttonFilter("3d")}>3D</button>
      <button className="select__button" onClick={()=>buttonFilter("hover")}>Hover</button>
      </div>
      <div className="buttons__show">{modifyList}</div>
    </div>
  );
}

export default YourButton;