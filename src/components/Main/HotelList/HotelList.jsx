import React, { useState } from 'react';
import HotelCard from '../HotelCard/HotelCard'
import { hotelsData } from '../../../assets/data/data.js'

const HotelList = () => {

const [hotelList, setHotelList] = useState(hotelsData);   

const hotelList2 = hotelList.filter(hotel => hotel.country === "Brasil" && hotel.price === 3);

    return(
        <section className="HotelsContainer">
            { hotelList2.map((hotel) => {
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

