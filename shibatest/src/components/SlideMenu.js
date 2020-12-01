import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        <div className="slide-menu-close" onClick={toggleDrawer('right',false)}>
            <img src={CloseIcon} />
        </div>
      </div>
      
      <List>
        {[{value:'HOME',sub:'ホーム',link:''},{value:'ABOUT',sub:'展覧会について',link:''},{value:'WORKS',sub:'展示作品一覧',link:''},{value:'PORTFOLIO',sub:'ポートフォリオ一覧',link:''},{value:'CONTACT',sub:'お問い合わせ',link:''}].map((item) => (
          <SlideMenuButton 
          value={item.value}
          sub={item.sub}
          link={item.link}
          />
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
            <img src={MenuIcon} onClick={toggleDrawer(anchor, true)} />
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
