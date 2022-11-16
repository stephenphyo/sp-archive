import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import LoaderData from './LoaderData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import Loader001 from './submodules/Loader001/Loader001';
import Loader002 from './submodules/Loader002/Loader002';
import Loader003 from './submodules/Loader003/Loader003';
import Loader004 from './submodules/Loader004/Loader004';

function Loader() {
    return (
        <div className='grid'>
            <Cell data={LoaderData[1]} display='001'><Loader001 /></Cell>
            <Cell data={LoaderData[2]} display='002'><Loader002 /></Cell>
            <Cell data={LoaderData[3]} display='003'><Loader003 /></Cell>
            <Cell data={LoaderData[4]} display='004'><Loader004 /></Cell>
        </div>
    );
}

export default Loader;