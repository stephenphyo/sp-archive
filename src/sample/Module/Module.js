import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import ModuleData from './ModuleData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */


function ModuleName() {
    return (
        <div className='grid'>
            <Cell data={ModuleData[1]} display='001'>
                {/* <SubModule /> */}
            </Cell>
        </div>
    );
}

export default ModuleName;