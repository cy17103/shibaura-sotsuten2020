import React from 'react';
import './SlideMenuButton.css';


class SlideMenuButton extends React.Component{

    render(){
        
        const subtext ={

        }

        return( 
            <div className="SlideMenuButton">
                <div className="Button-text">{this.props.value}</div>
                <p className="Button-subtext">{this.props.sub}</p>
            </div>
        );
    }
}

export default SlideMenuButton;