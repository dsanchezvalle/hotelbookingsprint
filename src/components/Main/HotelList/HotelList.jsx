import React from 'react';
import HotelCard from '../HotelCard/HotelCard'
import { hotelsData } from '../../../assets/data/data.js'

const HotelList = () => {
    return(
        <section className="HotelsContainer">
            <HotelCard 
                slug = {hotelsData[0].slug}
                name = {hotelsData[0].name}
                photo = {hotelsData[0].photo}
                description = {hotelsData[0].description}
                availabilityFrom = {hotelsData[0].availabilityFrom}
                availabilityTo = {hotelsData[0].availabilityTo}
                rooms = {hotelsData[0].rooms}
                city = {hotelsData[0].city}
                country = {hotelsData[0].country}
                price = {hotelsData[0].price}
            />
        </section>
    );
}

export default HotelList;