import React from 'react';
import '../../assets/styles/Main/Main.scss'
import HotelCard from './HotelCard/HotelCard'

const Main = () => {
    return (
        <>
        <main className="Main">
        <section className="HotelsContainer">
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
        </section>   
                {/* <HotelList /> */}
        </main>
        </>
    );
}

export default Main;