import React from 'react';
import ClassTag from './ClassTag';
import './PortfolioItem.css';



class PortfolioItem extends React.Component{

    render(){

        let containerClass = `portfolio-item-container ${this.props.className}`;

        return( /* propsで渡された文字列を線で挟む */

            <div className={containerClass}>
                <ClassTag
                    class={this.props.status}
                />

                <div className="portfolio-item-contents">
                    <h4 className="portfolio-item-title white">芝浦 太郎</h4>
                </div>
                
            </div>
        );
    }
}

export default PortfolioItem;