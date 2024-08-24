import React from 'react';
import { useSelector} from 'react-redux';
import './Loader.css';
import Badge from '../../Components/Badges/Badge';
import CreateButton from '../../Components/Buttons/CreateButton';

function Loader(){
    // Initializing hook for accessing state
    const list = useSelector(state=> state.repository.loaderList);

    function renderLoader() {
        // Mapping over button list to create Badge components
        const modifyList = list.map(item => {
            
            return (
                <Badge 
                    key={item.id} 
                    button={
                        <CreateButton 
                            stylefix={item.cssCode} 
                            htmlCode={item.htmlCode} // Pasar el htmlCode modificado
                            key={item.id} 
                            copied={"Copied!"}
                        />
                    }
                />
            );
        });
    
        return modifyList; // Renderiza el listado modificado
    }
    return(
        <>
        <div className="loader-container">
            <div className="loader__show">{renderLoader()}</div>
        </div>
        </>
    )
}

export default Loader;