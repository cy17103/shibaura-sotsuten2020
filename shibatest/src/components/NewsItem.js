import React from 'react';
import './NewsItem.css';
import Image from '../img/news-default.png';


class NewsItem extends React.Component{

    render(){

        //const Image = require('../img/news-default.png');
        
        return( 
            <div className="news-item">
                {/*imageに指定がなければデフォルト画像を表示するようにする */}
                <img src={Image} alt="description of image" className="news-item-image" />
                <p className="news-item-date">{this.props.date}</p>
                <a href="#" className="textlink">{this.props.title}</a>
                <p className="news-item-text">{this.props.text}</p>
            </div>
        );
    }
}

export default NewsItem;