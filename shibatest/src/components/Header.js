import React from 'react';
import SlideMenu from './SlideMenu'
import './Header.css';

class Header extends React.Component{

    render(){


        
        return(
            <div className="header">
                <div className="header-container">
                    <div className="header-left"></div>
                    <div className="header-right">
                        <SlideMenu />
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;