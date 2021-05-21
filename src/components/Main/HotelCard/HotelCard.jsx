import React from 'react';
import getPriceSigns from '../../../assets/utils.js'

const HotelCard = ({name, country, rooms, price, description}) => {
    return (
        <article className="HotelCard">
            <h2 className="HotelCard__Title">{name}</h2>
            <section className="HotelCard__Info">
                <div className="HotelCard__Country">
                    <img src="https://cdn.countryflags.com/thumbs/argentina/flag-round-250.png" alt="(flag)" className="HotelCard__Flag" />
                    <p className="HotelCard__CountryName">{country}</p> 
                </div>
                <div className="HotelCard__Numbers">
                    <p className="HotelCard__Rooms">{rooms} rooms</p>
                    -
                    <p className="HotelCard__Price">{getPriceSigns(price)}</p>
                </div>
                <p className="HotelCard__Description">{description}</p>
            </section>
            <button className="HotelCard__Button">Book it!</button>
        </article>
    );
}

export default HotelCard;
  