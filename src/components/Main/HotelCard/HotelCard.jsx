import React from 'react';

const HotelCard = () => {
    return (
        <article className="HotelCard">
            <h2 className="HotelCard__Title">La Bamba de Areco</h2>
            <section className="HotelCard__Info">
                <div className="HotelCard__Country">
                    <img src="https://cdn.countryflags.com/thumbs/argentina/flag-round-250.png" alt="(flag)" className="HotelCard__Flag" />
                    <p className="HotelCard__CountryName">Argentina</p> 
                </div>
                <div className="HotelCard__Numbers">
                    <p className="HotelCard__Rooms">22 rooms</p>
                    -
                    <p className="HotelCard__Price">$$$$</p>
                </div>
                <p className="HotelCard__Description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis assumenda suscipit, consequuntur possimus mollitia minima commodi eius eos, temporibus porro sequi id ad molestiae dolores ea perferendis. Adipisci, voluptas magni?</p>
            </section>
            <button className="HotelCard__Button">Book it!</button>
        </article>
    );
}

export default HotelCard;