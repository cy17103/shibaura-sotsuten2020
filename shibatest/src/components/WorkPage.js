import React from 'react';
import './WorkPage.css';
import '../Style.css';
import kanji from '../img/box-do.svg';

class WorkPage extends React.Component{

    render(){

    const array = this.props.array;


    let firstSrc = `${process.env.PUBLIC_URL}/assets/workImageList1/workImage_${array.id}_01.png`;
    let secondSrc = `${process.env.PUBLIC_URL}/assets/workImageList2/workImage_${array.id}_02.png`;
    //複数の拡張子に対応させるか、データソースの拡張子を全て統一する

    let workImages = (
        <div className="work-imgs">
            <img src={firstSrc} className="work-img" alt="workImage01"/>
            <img src={secondSrc} className="work-img" alt="workImage02"/>
        </div>
        );
        //３枚目があるときは横スクロールにする？
        
        return( 
            <div>
                {workImages}

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