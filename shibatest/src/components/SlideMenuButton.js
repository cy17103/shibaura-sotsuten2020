import React from 'react';
import './SlideMenuButton.css';
import {Link} from '../../node_modules/react-router-dom';



class SlideMenuButton extends React.Component{

    render(){
        
        return( 
            <div className="SlideMenuButton">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <div className="Button-text">{this.props.value}</div>
                        <p className="Button-subtext">{this.props.sub}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default SlideMenuButton;