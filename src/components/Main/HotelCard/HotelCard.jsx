import React from 'react';

const HotelCard = () => {
    return (
        <article className="HotelCard">
            <h2 className="HotelCard__Title">Hotel **** Name</h2>
            <section className="HotelCard__Info">
                
                <p className="HotelCard__Country">
                    <img src="" alt="(flag)" className="HotelCard__Flag" />
                    <p className="HotelCard__CountryName">Argentina</p> 
                </p>
                <div className="HotelCard__Numbers">
                    <p className="HotelCard__Rooms">## Rooms</p>
                    <p className="HotelCard__Price">$$$$</p>
                </div>
                <p className="HotelCard__Description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis assumenda suscipit, consequuntur possimus mollitia minima commodi eius eos, temporibus porro sequi id ad molestiae dolores ea perferendis. Adipisci, voluptas magni?</p>
                <button className="HotelCard__Button">Book it!</button>
            </section>
        </article>
    );
}

export default HotelCard;