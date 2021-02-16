import React from 'react';
import './BtnAttention.css';


class Btn extends React.Component{

    render(){
        return(
            <div className="btn-attention">
                <div className="btn-attention-container">
                <p>{this.props.text}</p>
                </div>
                
            </div>
        );
    }
}

export default Btn;