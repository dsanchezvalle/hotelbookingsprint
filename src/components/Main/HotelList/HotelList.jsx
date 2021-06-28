//Dependencies
import React from 'react';
//Components
import HotelCard from '../HotelCard/HotelCard'

const HotelList = ({filteredHotels}) => {
    return filteredHotels.length > 0 ? 
    (
        <section className="HotelsContainer">
            { filteredHotels.map((hotel) => {
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
    ):(   
        <section className="HotelsNotFound">
            <img className="HotelsNotFound__Icon" src={require(`../../../assets/images/Main/InfoIcon/information.svg`)} alt="information icon" role="presentation" aria-hidden="true" focusable="false" />
            <p className="HotelsNotFound__Message">No hotels left with those filters. Try a new combination of them. </p> 
        </section>
    )
}

export default HotelList;

