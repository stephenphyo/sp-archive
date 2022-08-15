import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* CSS Imports */
import './App.css';

/* Component Imports */
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

/*** Module Imports ***/
/* Inputs */
import Button from 'modules/Inputs/Button/Button';
import Checkbox from 'modules/Inputs/Checkbox/Checkbox';
import ToggleButton from 'modules/Inputs/ToggleButton/ToggleButton';
import Slider from 'modules/Inputs/Slider/Slider';
import SearchBox from 'modules/Inputs/SearchBox/SearchBox';

/* Feedbacks */
import Loader from 'modules/Feedbacks/Loader/Loader';
import ProgressBar from 'modules/Feedbacks/ProgressBar/ProgressBar';

/* Animations */
import TextAnimation from 'modules/Animations/TextAnimation/TextAnimation';
import IconAnimation from 'modules/Animations/IconAnimation/IconAnimation';

function App() {
    return (
        <div className='app'>
            <Helmet>
                <title>SP Archive</title>
            </Helmet>
            <Router>
                <div className='app_header'>
                    <Header />
                </div>
                <div className='app_body' >
                    <Sidebar />
                    <div className='app_body_main'>
                        <Routes>
                            {/* Inputs */}
                            <Route path='/inputs/button' element={<Button />} />
                            <Route path='/inputs/checkbox' element={<Checkbox />} />
                            <Route path='/inputs/togglebutton' element={<ToggleButton />} />
                            <Route path='/inputs/slider' element={<Slider />} />
                            <Route path='/inputs/searchbox' element={<SearchBox />} />

                            {/* Feedbacks */}
                            <Route path='/feedbacks/loader' element={<Loader />} />
                            <Route path='/feedbacks/progressbar' element={<ProgressBar />} />

                            {/* Animations */}
                            <Route path='/animations/text' element={<TextAnimation />} />
                            <Route path='/animations/icon' element={<IconAnimation />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;