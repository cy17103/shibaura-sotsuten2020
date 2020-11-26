import React from 'react';
import ClassTag from './ClassTag';
import './PortfolioItem.css';



class PortfolioItem extends React.Component{

    render(){
        return( /* propsで渡された文字列を線で挟む */
            <div className="portfolio-item-container">
                <ClassTag
                    class={this.props.class}
                />

                <div className="portfolio-item-contents">
                    <h4 className="portfolio-item-title white">芝浦 太郎</h4>
                </div>
                
            </div>
        );
    }
}

export default PortfolioItem;