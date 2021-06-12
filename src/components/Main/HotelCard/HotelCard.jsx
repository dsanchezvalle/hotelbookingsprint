import React from 'react';
import {getPriceSigns, getBackgroundImg} from '../../../assets/utils.js'

const HotelCard = ({name, country, rooms, price, description, photo}) => {
    
    return (
        <article className="HotelCard">
            <img className="HotelCard__Img" src={require(`../../../assets/images/Main/Hotels/${photo}`)} alt="photoHotel" />
            <h2 className="HotelCard__Title">{name}</h2>
            <section className="HotelCard__Info">
                <div className="HotelCard__Country-Numbers">
                    <div className="HotelCard__Country" >
                        <img src={require(`../../../assets/images/Main/Flags/${country.toLowerCase()}.svg`)} alt="(flag)" className="HotelCard__Flag" />
                        <p className="HotelCard__CountryName">{country}</p> 
                    </div>
                    <div className="HotelCard__Numbers">
                        <p className="HotelCard__Rooms">{rooms} rooms</p>
                        -
                        <p className="HotelCard__Price">{getPriceSigns(price)}</p>
                    </div>
                </div>
                <p className="HotelCard__Description">{description}</p>
            </section>
            <button className="HotelCard__Button">Book it!</button>
        </article>
    );
}

export default HotelCard;