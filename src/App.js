/*-----------------React's imports-------------------*/
import React from 'react';
import { useSelector } from 'react-redux';
/*------------------ CSS import ---------------------*/
import './App.css'; // Import CSS styles for the App component
/*----------------Components imports-----------------*/
import Clipboard from './Components/Clipboard/Clipboard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
/*----------------- Layout imports ------------------*/
import Home from './Layouts/Home/Home';
import YourButton from './Layouts/YourButton';
import BuildButton from './Layouts/BuildButton';
import Carousel from './Layouts/Carousel/Carousel';
import Modal from './Layouts/Modal/Modal';
import Card from './Layouts/Card/CardLayout';
import Loader from './Layouts/Loader/Loader';
function App() {
  
  // Redux state selectors
  const displayOn = useSelector(state=> state.CreateButton.displayOn); // Select the 'displayOn' state from the Redux store
  const clipboards = useSelector(state=>state.copy.clipboard); // Select the 'clipboard' state from the Redux store
  
  // Layout selector function.
  const ComponentToShow = () => {

    const sections = {
      'Home':<Home/>,
      //'Header':<Header/>,
      'YourButton':<YourButton/>,
      'BuildButton':<BuildButton/>,
      'Carousel':<Carousel/>,
      'Modal':<Modal/>,
      'Card':<Card/>,
      'Loader':<Loader/>
    }

    if (sections[displayOn]) {
      return sections[displayOn];  // Retorna el componente correspondiente
    }
    return null;
    
  };

  // Return Clipboard component if someone has copied any component
  const showClipboard = () => {
    if(clipboards){
      return <Clipboard/>; // Render Clipboard component if 'clipboards' state is truthy
    }
  }

  return (
    <div className="App">
      <Header/>
      {ComponentToShow()}
      {showClipboard()}
      <Footer/>
    </div>
  );
}

export default App; // Export App component as default

