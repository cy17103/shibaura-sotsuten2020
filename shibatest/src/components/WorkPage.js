import React from 'react';
import './WorkPage.css';
import '../Style.css';

class WorkPage extends React.Component{

    render(){

    const array = this.props.array;


    let firstSrc = `${process.env.PUBLIC_URL}/assets/workImageList1/workImage_${array.id}_01.png`; //１枚目の画像
    let secondSrc = `${process.env.PUBLIC_URL}/assets/workImageList2/workImage_${array.id}_02.png`; //２枚目の画像

    let kanji = `${process.env.PUBLIC_URL}/assets/kanji_${array.genre}.svg`; //漢字のsvg
    

    let workImages = (
        <ul className="work-imgs">
            <li class="item"><img src={firstSrc} className="work-img" alt="workImage01"/></li>
            <li class="item"><img src={secondSrc} className="work-img" alt="workImage02"/></li>
        </ul>

        );
        
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