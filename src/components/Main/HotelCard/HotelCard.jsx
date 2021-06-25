import React from 'react';
import {getPriceSigns, getBackgroundImg} from '../../../assets/utils.js'

const HotelCard = ({name, country, rooms, price, description, photo}) => {
    
    const handleTap = (e) => {
        const hotelCard = e.target.parentElement;
        hotelCard.classList.toggle('Expanded');
        preventScroll();
        e.target.innerHTML= hotelCard.classList.contains('Expanded')?"<":"+";
    }
    
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
            <button className="HotelCard__More" id="HotelCard__More" onClick={handleTap}>+</button>
            <button className="HotelCard__Book">Book it!</button>
        </article>
    );
}

export default HotelCard;

function preventScroll(){
    window.scrollTo(0, 0);
    window.addEventListener('scroll', ()=>{window.scrollTo(0, 0);});
}