import React from 'react';
import { useSelector} from 'react-redux';
import './CardLayout.css';
import CreateCard from '../../Components/Card/CardContainer';

function Card(){
    // Initializing hook for accessing state
    const list = useSelector(state=> state.repository.cardList);

    function renderCard() {
        // Mapping over button list to create Badge components
        const modifyList = list.map(item => {
            
            return (
            <CreateCard 
                    stylefix={item.cssCode} 
                    htmlCode={item.htmlCode} // Pasar el htmlCode modificado
                    key={item.id} 
                    copied={"Copied!"}
            />
            );
        });
    
        return modifyList; // Renderiza el listado modificado
    }
    return(
        <>
        <div className="cardLayout-container">
            <div className="card__show">{renderCard()}</div>
        </div>
        </>
    )
}

export default Card;