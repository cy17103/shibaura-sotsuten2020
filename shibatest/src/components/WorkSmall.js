import React from 'react';
import './WorkSmall.css';


class WorkSmall extends React.Component{

    render(){

    const image = this.props.image;
    let src = `${process.env.PUBLIC_URL}/assets/${image}`;
        
        return( 
            <div className="work-small">
                <a href="/" title={this.props.title}>
                    {/*imageに指定がなければデフォルト画像を表示するようにする */}
                    <div className="image-container"><img src={src} alt="サムネイル" className="work-small-image" /></div>
                    <div className="work-small-title" >{this.props.title}</div>
                    <div className="works-small-subtext">
                        <p>{this.props.name} | {this.props.lab}</p> 
                        <p></p>
                    </div>

                </a>
            </div>
        );
    }
}

export default WorkSmall;