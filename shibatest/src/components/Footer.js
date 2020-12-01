import React from 'react';
import './Footer.css';
import Logo from '../img/logo-white.svg';
import Icon from '@material-ui/core/Icon';



class Footer extends React.Component{

    render(){
        return( 
            <div className="footer">
                <div className="footer-container">

                    <div className="footer-upper">
                        <img src={Logo} alt='logo' className="footer-left" />

                        <div className="footer-center">
                            <div className="ankerlink">
                                <a href="#" className="ankerlink-textlink">ABOUT</a>
                                <p className="slash">/</p>
                                <a href="#" className="ankerlink-textlink">WORKS</a>
                                <p className="slash">/</p>
                                <a href="#" className="ankerlink-textlink">PORTFOLIO</a>
                                <p className="slash">/</p>
                                <a href="#" className="ankerlink-textlink">CONTACT</a>
                            </div>

                            <div className="sns">
                                <div className="ic-facebook-white"></div>
                                <div className="ic-twitter-white"></div>
                                <div className="ic-instagram-white"></div>
                            </div>
                        </div>

                        <div className="footer-right">
                            <h4>お問い合わせ先</h4>
                            <p className="footer-text">芝浦工業大学 2021卒展委員</p>
                            <div　className="footer-text"><Icon className="ic-white mgr-4">mail_outline</Icon><span className="footer-text">sibaura-sotsu2021@gmail.com</span></div>
                            <div className="footer-text"><Icon className="ic-white mgr-4">insert_link</Icon><a href="#" className="footer-contact-link footer-link">お問い合わせフォーム</a></div>

                        </div>
                    </div>

                    <p className="copyright">Copyright ©︎ 芝浦卒展委員 All Rights Reserved.</p>
                </div>

            </div>
        );
    }
}

export default Footer;