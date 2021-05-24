import React, {useState} from 'react';
import '../assets/styles/App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import { filtersData } from '../assets/data/data.js';

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

    return (
        <>
            <Header 
                filters = {filterList}
                onFilter = {handleGlobalFilters}
            />
            <Main />
        </>
    );
}

export default App;