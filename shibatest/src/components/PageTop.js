import React from 'react';
import './PageTop.css';

class PageTop extends React.Component{

    render(){


        
        return(
            <div className="pagetop">
                <div className="pagetop-container">
                    <h1 className="pagetop-title">{this.props.title}</h1>
                    <p>{this.props.text}</p>
                    <hr className="pagetop-border" width="200" size="1" color="#212121" noshade></hr>
                </div>

            </div>
        );
    }
}

export default PageTop;