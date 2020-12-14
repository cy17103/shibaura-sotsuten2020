import React from 'react';
import SlideMenu from './SlideMenu'
import './Header.css';
import {Link} from '../../node_modules/react-router-dom';
import src from '../img/logo.svg';

class Header extends React.Component{

    render(){

        return(
            <div className="header">
                
                <div className="header-container">
                    <div className="header-left" ><Link to="/"><img className="header-logo" src={src} alt="logo"/></Link></div>
                    <div className="header-right">
                        <SlideMenu currentPath={this.props.currentPath}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;