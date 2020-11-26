import React from 'react';
import './TopSection.css';

class TopSection extends React.Component{

    render(){
        return( /* propsで渡された文字列を線で挟む */
            <div className="top-section">
                <h2><span>{this.props.sectionTitle}</span></h2>
            </div>
        );
    }
}

export default TopSection;