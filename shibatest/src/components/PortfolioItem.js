import React from 'react';
import ClassTag from './ClassTag';
import './PortfolioItem.css';



class PortfolioItem extends React.Component{

    render(){

        const image = this.props.image;
        let src = `${process.env.PUBLIC_URL}/assets/${image}`;

        let containerClass = `portfolio-item-container ${this.props.className}`;

        return( /* propsで渡された文字列を線で挟む */

            <div className={containerClass}>
                <ClassTag
                    class={this.props.status}
                />
                <img src={src} className="portfolio-item-bg" alt="portfolioThumbnail" />

                <div className="portfolio-item-contents">
                <h4 className="portfolio-item-title white">{this.props.name}</h4>
                </div>
                
            </div>
        );
    }
}

export default PortfolioItem;