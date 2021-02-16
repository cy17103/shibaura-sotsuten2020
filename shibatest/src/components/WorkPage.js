import React from 'react';
import './WorkPage.css';
import '../Style.css';

import aboutImage from '../img/aboutImage.png';
import kanji from '../img/box-do.svg';


class WorkPage extends React.Component{

    render(){

    const image = this.props.image;
    let src = `${process.env.PUBLIC_URL}/assets/${image}`;
        
        return( 
            <div>
                <div className="work-imgs">
                    <img src={aboutImage} className="work-img" alt="exhibitionPoster"/>
                    <img src={aboutImage} className="work-img" alt="exhibitionPoster"/>
                </div>

                <div className="work-contents-container">
                    <div className="work-contents">
                        <div className="work-about">
                        <img src={kanji} className="kanji" alt="exhibitionPoster"/>
                        <div className="work-title">
                        <div className="title">研究タイトルです研究タイトルです研究タイトルです研究タイトルです</div>
                        <div className="name-lab">氏名 | 研究室名</div>
                        </div>
                        </div>
                        <hr></hr>
                        <div>aaa</div>
                    </div>
                    <hr></hr>
                </div>

            </div>
        );
    }
}

export default WorkPage;