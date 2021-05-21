import React from 'react';
import HotelCard from '../HotelCard/HotelCard'
import { hotelsData } from '../../../assets/data/data.js'

const HotelList = () => {
    return(
        <section className="HotelsContainer">
            { hotelsData.map((hotel) => {
                return(
                    <HotelCard
                    key = {"h-" + hotel.name} 
                    slug = {hotel.slug}
                    name = {hotel.name}
                    photo = {hotel.photo}
                    description = {hotel.description}
                    availabilityFrom = {hotel.availabilityFrom}
                    availabilityTo = {hotel.availabilityTo}
                    rooms = {hotel.rooms}
                    city = {hotel.city}
                    country = {hotel.country}
                    price = {hotel.price}
                />
                );
            })    
            }
        </section>
    );
}

export default HotelList;

