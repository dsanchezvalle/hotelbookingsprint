import React, {useState} from 'react';
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
    let filteredHotelList = filterHotels(hotelsData, filterList);

    return (
        <>
            <Header 
                filters = {filterList}
                onFilter = {handleGlobalFilters}
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
  
    return filteredHotelList3;  
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