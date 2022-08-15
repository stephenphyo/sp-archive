import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

/* CSS Import */
import './Header.css';

/* MUI Imports */
import MenuIcon from '@mui/icons-material/Menu';

/* Context Imports */
import { SidebarContext } from 'contexts/SidebarContext';

function Header() {

    /* useContext */
    const { sidebarOpen, setSidebarOpen, menuRef }
        = useContext(SidebarContext);

    return (
        <>
            <div className='header'>
                <div
                    ref={menuRef}
                    className='header_sidebarmenu'>
                    <MenuIcon onClick={() => setSidebarOpen(!sidebarOpen)} />
                </div>
                <div className='header_logo'>
                    <p>
                        SP Archive
                        <span>BY STEPHEN PHYO</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Header;