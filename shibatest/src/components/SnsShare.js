import React from 'react';
import './SnsShare.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

class SnsShare extends React.Component{

    render(){ //propsに color='#カラーコード'　を指定する必要がある

        let fill = this.props.color;

        return( 
            <div className="sns">
                <a href="https://www.facebook.com/shibauradesign2020/" target="_blank" rel="noopener noreferrer"><FacebookIcon className={"Icon"} style={{ color:fill,fontSize: 40 }} /></a>
                <a href="https://twitter.com/sit_designex" target="_blank" rel="noopener noreferrer"><TwitterIcon className={"Icon"} style={{ color:fill,fontSize: 40 }} /></a>
                <a href="https://www.instagram.com/shibasotsu_2021/?hl=ja" target="_blank" rel="noopener noreferrer"><InstagramIcon className={"Icon"} style={{ color:fill,fontSize: 40 }} /></a>
            </div>
        );
    }
}

export default SnsShare;












