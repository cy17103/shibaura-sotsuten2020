import React from 'react';
import './Header.css';

class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <div className="header-container">
                    <div className="header-left"></div>
                    <div className="header-right"></div>
                </div>

            </div>
        );
    }
}

export default Header;