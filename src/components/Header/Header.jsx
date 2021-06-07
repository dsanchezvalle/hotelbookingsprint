import React, {useState} from 'react';
import '../../assets/styles/Header/Header.scss';

const Header = ({filters, onFilter, onClearFilter}) => {
   
   const [countryFilter, priceFilter, sizeFilter, dateFromFilter, dateToFilter] = filters;
      
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
                <img className="Filter__Icon" src="https://cdn.iconscout.com/icon/free/png-512/filter-1634626-1389150.png" alt="filter-icon"/>
                <div className="Filter__Grid">
                    <select className="Filter__Countries" onChange={handleFilters} name="filter-countries" id="filter-countries" value={countryFilter.value}>
                        <option value="all">All countries</option>
                        <option value="country1">Argentina</option>
                        <option value="country2">Brasil</option>
                        <option value="country3">Chile</option>
                        <option value="country4">Uruguay</option>
                    </select>
                    <input className="Filter__DateFrom" name="date-from" id="date-from" onChange={handleFilters} min={getFormattedToday()} max={dateToFilter.value} type="date" value={dateFromFilter.value}/>
                    <input className="Filter__DateTo" name="date-to" id="date-to" onChange={handleFilters} type="date" min={dateFromFilter.value} value={dateToFilter.value}/>
                    <select className="Filter__Prices" onChange={handleFilters} name="filter-prices" id="filter-prices" value={priceFilter.value}>
                        <option value="all">All prices</option>
                        <option value="price1">$</option>
                        <option value="price2">$$</option>
                        <option value="price3">$$$</option>
                        <option value="price4">$$$$</option>
                    </select>
                    <select className="Filter__Sizes" onChange={handleFilters} name="filter-sizes" id="filter-sizes" value={sizeFilter.value}>
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

function getFormattedToday(){
    return formatDate(new Date().toLocaleDateString());
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

//Send to utils
const getCountryString = (countryValue) =>{
    switch(countryValue){
        case "country1":
            return "Argentina";
        case "country2":
            return "Brasil";
        case "country3":
            return "Chile";
        case "country4":
            return "Uruguay";
        default:
            return "all countries";
    }
}

const getSizeString = (sizeValue) => {

    switch(sizeValue){
        case "size1":
            return "Small-sized";
        case "size2":
            return "Medium-sized";
        case "size3":
            return "Large-sized";
        case "all":
            return "All sizes";    
    }
}

const getPriceString = (priceValue) => {
    switch(priceValue){
        case "price1":
            return "economic";
        case "price2":
            return "comfort";
        case "price3":
            return "premium";
        case "price4":
            return "deluxe";
        case "all":
            return "all category"                
    }
}

const getDateString = (dateFromValue, dateToValue) =>{
    
    //Create and adjust dates to UTC Offset.
    let dateFrom = new Date(dateFromValue);
    dateFrom.setHours(dateFrom.getHours()+(dateFrom.getTimezoneOffset()/60));
    let dateTo = new Date(dateToValue);
    dateTo.setHours(dateTo.getHours()+(dateTo.getTimezoneOffset()/60));
    
    //Define arguments to send to Intl.DateTimeFormat according to expected string
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    if(dateFromValue !== "" && dateToValue !== ""){
        let dateFromString = new Intl.DateTimeFormat('en-US', options).format(dateFrom);
        let dateToString = new Intl.DateTimeFormat('en-US', options).format(new Date(dateTo));
        return `from ${dateFromString} to ${dateToString}`;
    }
    return "";
}
