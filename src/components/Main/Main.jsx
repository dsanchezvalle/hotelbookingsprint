import React from 'react';
import '../../assets/styles/Main/Main.scss'
import HotelList from './HotelList/HotelList';

const Main = ({hotels}) => {
    return (
        <>
        <main className="Main">
            {hotels}
        </main>
        </>
    );
}

export default Main;