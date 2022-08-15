import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import SearchBoxData from './SearchBoxData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import SearchBox001 from './submodules/SearchBox001/SearchBox001';

function SearchBox() {
    return (
        <div className='grid'>
            <Cell data={SearchBoxData[1]} display='001'>
                <SearchBox001 />
            </Cell>
        </div>
    );
}

export default SearchBox;