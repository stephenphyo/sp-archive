import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS Import */
import './Sidebar.css';

/* Context Import */
import { SidebarContext } from 'contexts/SidebarContext';

/* MUI Imports */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SidebarItems({ sidebar, data }) {

    /* useNavigate */
    const navigate = useNavigate();

    /* useState */
    const [dropdown, setDropdown] = useState(null);
    const [parentActive, setParentActive] = useState(null);

    /* useContext */
    const { active, setActive } = useContext(SidebarContext);

    return (
        <ul className={`${dropdown ? 'drop' : ''}`}>
            {data.map((item, index) => (
                item.children
                    ? (
                        <React.Fragment key={index}>
                            <li
                                className={`sidebar_item parent ${parentActive === index && dropdown ? 'drop' : ''}`}
                                onClick={() => {
                                    setParentActive(index);
                                    if (parentActive === index) {
                                        setDropdown(!dropdown);
                                    } else {
                                        setDropdown(true);
                                    }
                                }}>
                                <div className='sidebar_item_content'>
                                    <span className={'sidebar_item_text'}>
                                        {item.text}
                                    </span>
                                </div>
                                <div className='sidebar_item_arrow'>
                                    <ArrowDropDownIcon />
                                </div>
                            </li>
                            {parentActive === index && dropdown && <hr />}
                            <div
                                className={`sidebar_subitems ${parentActive === index && dropdown ? 'drop' : 'not'}`}>
                                <SidebarItems sidebar={sidebar} data={item.children} />
                            </div>
                        </React.Fragment>
                    )
                    : (
                        <li
                            key={index}
                            className={`sidebar_item ${active === item.url ? 'active' : ''}`}
                            onClick={() => {
                                setActive(item.url);
                                setDropdown(false);
                                navigate(item.url);
                            }}>
                            <div className='sidebar_item_content'>
                                <span className='sidebar_item_text'>
                                    {item.text}
                                </span>
                            </div>
                        </li>
                    )
            ))}
        </ul>
    );
}

export default SidebarItems;