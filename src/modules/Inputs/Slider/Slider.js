import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import SliderData from './SliderData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import Slider001 from './submodules/Slider001/Slider001';


function Slider() {
    return (
        <div className='grid'>
            <Cell data={SliderData[1]} display='001' width='500px'>
                <Slider001 />
            </Cell>
        </div>
    );
}

export default Slider;