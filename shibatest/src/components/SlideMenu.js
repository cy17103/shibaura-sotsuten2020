import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import CloseIcon from '../img/close.svg';
import MenuIcon from '../img/menu.svg';


import './SlideMenu.css';
import SlideMenuButton from './SlideMenuButton';
import SnsShare from './SnsShare';

const useStyles = makeStyles({
  list: {
    width: 340,
  },
  fullList: {
    width: 'auto',
  },
});




export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let pagesArray = [
    {value:'HOME',sub:'ホーム',link:'/',flag:'false'},
    {value:'ABOUT',sub:'展覧会について',link:'/About',flag:'false'},
    {value:'WORKS',sub:'展示作品一覧',link:'/Works',flag:'false'},
    {value:'PORTFOLIO',sub:'ポートフォリオ一覧',link:'/Portfolio',flag:'false'},
    {value:'CONTACT',sub:'お問い合わせ',link:'/Contact',flag:'false'}
  ];

  const currentPageName = props.currentPath.toUpperCase() ;

  for(let i=0; i < pagesArray.length;i++){
    const item = pagesArray[i];
    if(item.value === currentPageName){
      item.flag = 'true';
    };

  };
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <div className="slide-menu-header" >
        <div className="slide-menu-ic" onClick={toggleDrawer('right',false)}>
            <img src={CloseIcon} alt="CloseIcon" />
        </div>
      </div>
      
      <List>
        {pagesArray.map((item) => (
          <div onClick={toggleDrawer('right',false)} key={item.value}>
          <SlideMenuButton  key={item.value}
          value={item.value}
          sub={item.sub}
          link={item.link}
          flag={item.flag}
          />
          </div>
        ))}
      </List>


      <Divider />
      
      <div className="slide-menu-sns">
          <p className="slide-menu-sns-text">Offcial SNS</p>
          <SnsShare color="#212121" />
      </div>
      
    </div>
  );

  return (
    <div className="slide-menu">
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <div className=" slide-menu-ic" onClick={toggleDrawer(anchor, true)} >
            <img src={MenuIcon} alt="MenuIcon" /></div>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
