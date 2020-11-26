import React from 'react';
import './WorksItem.css';
import BG from '../img/WorksItemBG01.png';
class WorksItem extends React.Component{

    render(){
        return(
            <div className="works-item-container">
                <img src={BG} className="works-item-bg" />
                <div className="works-item-contents">
                    <h4 className="works-item-title white">研究タイトル</h4>
                    <div className="works-item-subtext">
                        <p>感性インタラクションデザイン研究室</p>
                        <p>芝浦 太郎</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorksItem;