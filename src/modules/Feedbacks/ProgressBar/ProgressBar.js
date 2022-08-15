import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import ProgressBarData from './ProgressBarData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import ProgressBar001 from './submodules/ProgressBar001/ProgressBar001';

function ProgressBar() {
    return (
        <div className='grid'>
            <Cell data={ProgressBarData[1]} display='001' width='400px'>
                <ProgressBar001 />
            </Cell>
        </div>
    );
}

export default ProgressBar;