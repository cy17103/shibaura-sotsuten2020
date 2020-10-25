import React from 'react';
import './Btn.css';

class Btn extends React.Component{

    render(){
        return(
            <div className="btn">
                <div className="container">
                    <div className="ic-grid"></div>
                    <p>展示作品一覧を見る</p>
                </div>
                
            </div>
        );
    }
}

export default Btn;