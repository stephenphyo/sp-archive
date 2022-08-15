import React from 'react';

/* CSS Imports */
import './SearchBox001.css';

/* MUI Imports */
import SearchIcon from '@mui/icons-material/Search';

function SearchBox001() {
    return (
        <div id='searchbox001'>
            <div id='searchbox'>
                <input type='text' placeholder='search' />
                <div id='search_btn'>
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
}

export default SearchBox001;