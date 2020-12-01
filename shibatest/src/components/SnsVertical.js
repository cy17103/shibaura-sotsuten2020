import React from 'react';
import './SnsVertical.css';


class Btn extends React.Component{

    render(){
        return(
            <div className="sns-vertical">
                <p className="vertical">SHIBAURA SOTSUTEN 2021  SNS</p>
                <div className="sns-icons-vertical">
                    <div className="ic-facebook"></div>
                    <div className="ic-twitter"></div>
                    <div className="ic-instagram"></div>
                </div>
            </div>
        );
    }
}

export default Btn;