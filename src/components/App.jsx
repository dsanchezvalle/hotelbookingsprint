import React, {useEffect, useState} from 'react';
import '../assets/styles/App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import { filtersData, hotelsData } from '../assets/data/data.js';
import HotelList from './Main/HotelList/HotelList';

const App = () => {
    const [filterList, setFilterList ] = useState (filtersData);

    const handleGlobalFilters = (filterId, filterValue) => {
        
        let newFilterList = filterList.map(filter => {
            return filterId === filter.id ?
            {
                id: filter.id, 
                value: filterValue
            }
            :
            filter; 
        } );
        setFilterList(newFilterList);
    }

    const handleClearFilters = () =>{
        setFilterList(filtersData);
    }

    let filteredHotelList = filterHotels(hotelsData, filterList);
    return (
        <>
            <Header 
                filters = {filterList}
                onFilter = {handleGlobalFilters}
                onClearFilter = {handleClearFilters}
            />
            <Main
                hotels = {<HotelList
                    filteredHotels = {filteredHotelList}
                     />}
            />
        </>
    );
}

export default App;

const filterHotels = (hotelList, filterList) => {
    let filteredHotelList = [];
    let filteredHotelList2 = [];
    let filteredHotelList3 = [];
    let filteredHotelList4 = [];

    if(filterList[0].value === "all"){
      filteredHotelList = hotelList;  
    }
    else{
      filteredHotelList = hotelList.filter(hotel => hotel.country === getCountryName(filterList[0].value));
    }

    if(filterList[1].value === "all"){
        filteredHotelList2 = filteredHotelList; 
    }
    else{
        filteredHotelList2 = filteredHotelList.filter(hotel => hotel.price === getPriceNumber(filterList[1].value));
    }
    
    if(filterList[2].value === "all"){
        filteredHotelList3 = filteredHotelList2;
    }
    else{
        filteredHotelList3 = filteredHotelList2.filter(hotel => checkSizeWithRooms(filterList[2].value, hotel.rooms));
    }
    
    if(filterList[3].value === "" || filterList[4].value === ""){
        filteredHotelList4 = filteredHotelList3;
    }
    else{
        if(verifyDateRange(getUnixDate(filterList[3].value), getUnixDate(filterList[4].value)) === "error"){
            alert("Error. The check-out date cannot be earlier than the check-in date.")
            filterList[3].value = "";
            filterList[4].value = "";
            return filteredHotelList3;
        }
        else if (!isNaN(getUnixDate(filterList[3].value)) && !isNaN(getUnixDate(filterList[4].value))){
            filteredHotelList4 = filteredHotelList3.filter(hotel => 
                checkAvailability(filterList[3].value, filterList[4].value, hotel));
        }        
    }
  
    return filteredHotelList4;  
} 

const getCountryName = (value) =>{
    switch(value){
        case "country1":
            return "Argentina";
        case "country2":
            return "Brasil";
        case "country3":
            return "Chile";
        case "country4":
            return "Uruguay";
        default:
            return "all";
    }
}

const getPriceNumber = (value) =>{
    switch(value){
        case "price1":
            return 1;
        case "price2":
            return 2;
        case "price3":
            return 3;
        case "price4":
            return 4;
        default:
            return "all";
    }
}

const checkSizeWithRooms = (size, rooms) => {

    switch(size){
        case "size1":
            if(rooms<=10){
                return true;
            }
            else return false;
        case "size2":
            if(rooms>10 && rooms <=20){
                return true;
            }
            else return false;
        case "size3":
            if(rooms>20){
                return true;
            }
            else return false;
    }

}

const checkAvailability = (dateFrom, dateTo, hotel) => {
    /*Lines 150 to 158:
    We add hours in order to adjust the UTC offset between the dates selected 
    by the user (in filters) and the given hotels' availability dates (in the database).*/
    let newSelectedFromDate = new Date(dateFrom);
    let newAvailabilityFrom = new Date(hotel.availabilityFrom);
    let hoursToAddFrom = newAvailabilityFrom.getHours() + (newSelectedFromDate.getTimezoneOffset()/60) + 1;
    newSelectedFromDate.setHours(newSelectedFromDate.getHours()+hoursToAddFrom);

    let newSelectedToDate = new Date(dateTo);
    let newAvailabilityTo = new Date(hotel.availabilityTo);
    let hoursToAddTo = newAvailabilityTo.getHours() + (newSelectedToDate.getTimezoneOffset()/60);
    newSelectedToDate.setHours(newSelectedToDate.getHours()+hoursToAddTo); 

    if((newSelectedFromDate.valueOf() >= newAvailabilityFrom.valueOf()) && (newSelectedToDate.valueOf() <= newAvailabilityTo.valueOf())){
        return true;
    }
    else return false;
}

function verifyDateRange(dateFrom, dateTo) {
    return dateFrom > dateTo ? "error" : "dates ok";
  }

  function getUnixDate(date) {
    return new Date(date).getTime();
  }  
  