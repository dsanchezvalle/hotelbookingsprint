//Dependencies
import React, {useEffect, useState} from 'react';
//Data
import { filtersData, hotelsData } from '../assets/data/data.js';
//Components
import Header from './Header/Header';
import Main from './Main/Main';
import HotelList from './Main/HotelList/HotelList';
//Styles
import '../assets/styles/App.scss';
//Utils
import { filterHotels } from '../assets/utils';

const App = () => {
    //State
    const [filterList, setFilterList ] = useState (filtersData);
    
    //Handlers
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
