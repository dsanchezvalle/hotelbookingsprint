import React, {useEffect} from 'react';
import '../../assets/styles/Main/Main.scss'

const Main = ({hotels}) => {

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

function fadeOutHoverInfoMsg() {
    let infoMsg = document.querySelector(".InfoMessage");
    setTimeout (()=>{
        infoMsg.style.transition = "all 0.5s ease-out";
        infoMsg.style.height=0;
        infoMsg.style.marginTop="-0.2rem";
        infoMsg.style.opacity=0;
        infoMsg.style.padding=0;  
    }, 4000) ;
}

