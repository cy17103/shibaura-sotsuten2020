import React from 'react';
import './WorkPage.css';
import '../Style.css';
import kanji from '../img/box-do.svg';

class WorkPage extends React.Component{

    render(){

    const array = this.props.array;
    let image = "workImage_"+array.id+"_01.png";
    let src = `${process.env.PUBLIC_URL}/assets/workImageList1/${image}`;

        
        return( 
            <div>
                <div className="work-imgs">
                    <img src={src} className="work-img" alt="exhibitionPoster"/>
                </div>

                <div className="work-contents-container">
                    <div className="work-contents">
                        <div className="work-about">
                            <img src={kanji} className="kanji" alt="exhibitionPoster"/>
                            <div className="work-title">
                                <div className="title">{array.title}</div>
                                <div className="name-lab">{array.name} | {array.lab}</div>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="work-content-list">
                            <h4>研究背景</h4>
                            <p>{array.background}</p>
                        </div>

                        <div className="work-content-list">
                            <h4>目的</h4>
                            <p>{array.purpose}</p>
                        </div>

                        <div className="work-content-list">
                            <h4>結果</h4>
                            <p>{array.result}</p>
                        </div>
                        <hr></hr>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default WorkPage;