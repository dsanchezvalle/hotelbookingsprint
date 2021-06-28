//Dependencies
import React, {useState} from 'react';
//Styles
import '../../assets/styles/Header/Header.scss';
//Utils
import { getFormattedToday, getCountryString, getSizeString, getPriceString, getDateString } from '../../assets/utils';

const Header = ({filters, onFilter, onClearFilter}) => {
   //State
    const [countryFilter, priceFilter, sizeFilter, dateFromFilter, dateToFilter] = filters;
   
   //Handlers
   const handleFilters = (e) => {
    onFilter(e.target.id, e.target.value); 
   }

   const handleClearButton = (e) => {
    onClearFilter();
   }
 
    return (        
        <header className="Header">
            <h1 className="Title">Book it!</h1>
            <div className="Filter__Container">
                <div className="Filter__Grid">
                    <select className="Filter__Countries Filter-Icon" onChange={handleFilters} name="filter-countries" id="filter-countries" value={countryFilter.value}>
                        <option value="all">All countries</option>
                        <option value="country1">Argentina</option>
                        <option value="country2">Brasil</option>
                        <option value="country3">Chile</option>
                        <option value="country4">Uruguay</option>
                    </select>
                    <input className="Filter__DateFrom Filter-Icon" name="date-from" id="date-from" onChange={handleFilters} min={getFormattedToday()} max={dateToFilter.value} type="date" value={dateFromFilter.value}/>
                    <input className="Filter__DateTo Filter-Icon" name="date-to" id="date-to" onChange={handleFilters} type="date" min={dateFromFilter.value} value={dateToFilter.value}/>
                    <select className="Filter__Prices Filter-Icon" onChange={handleFilters} name="filter-prices" id="filter-prices" value={priceFilter.value}>
                        <option value="all">All prices</option>
                        <option value="price1">$</option>
                        <option value="price2">$$</option>
                        <option value="price3">$$$</option>
                        <option value="price4">$$$$</option>
                    </select>
                    <select className="Filter__Sizes Filter-Icon" onChange={handleFilters} name="filter-sizes" id="filter-sizes" value={sizeFilter.value}>
                        <option value="all">All sizes</option>
                        <option value="size1">Small</option>
                        <option value="size2">Medium</option>
                        <option value="size3">Large</option>
                    </select>
                    <button className="Filter__Clear" onClick={handleClearButton}>Clear</button>
                </div>
            </div>
            <div className="FoundMessage__Container">
                <p className="FoundMessage__Title">We have found for you...</p>
                <p className="FoundMessage__Content">{getSizeString(sizeFilter.value)} hotels of {getPriceString(priceFilter.value)} prices, {getDateString(dateFromFilter.value, dateToFilter.value)} in {getCountryString(countryFilter.value)}.</p>
            </div>
        </header>        
    );
}

export default Header;
