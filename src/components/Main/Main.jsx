//Dependencies
import React, {useEffect} from 'react';
//Styles
import '../../assets/styles/Main/Main.scss'
//Utils
import { fadeOutHoverInfoMsg } from '../../assets/utils';

const Main = ({hotels}) => {
    
    //Effect
    useEffect(()=>{
        fadeOutHoverInfoMsg();    
    }, []);
    
    return (
        <>
        <section className="InfoMessage">
            <p className="Info__Text">Hover over the cards to discover amazing information! </p> 
        </section>
        <main className="Main">
            
            {hotels}
        </main>
        </>
    );
}

export default Main;



