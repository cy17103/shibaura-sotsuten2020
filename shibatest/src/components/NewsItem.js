import React from 'react';
import './NewsItem.css';
import Image from '../img/news-default.png';


class NewsItem extends React.Component{

    render(){

        
        return( 
            <div className="news-item">
                <a href="#" target="_blank" rel="noopener noreferrer" title={this.props.title}>
                    {/*imageに指定がなければデフォルト画像を表示するようにする */}
                    <img src={Image} alt="description of image" className="news-item-image" />
                    <p className="news-item-date">{this.props.date}</p>
                    <div className="news-item-title" >{this.props.title}</div>
                    <p className="news-item-text">{this.props.text}</p>
                </a>
            </div>
        );
    }
}

export default NewsItem;