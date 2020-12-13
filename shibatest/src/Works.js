import './Works.css';
import './Style.css';
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';

import SnsVertical from './components/SnsVertical';
import PageTop from './components/PageTop';

import WorksPagenation from './components/WorksPagenation';

function Works() {



  const number = 12;
  

  return (

    <div className="Works">
      
        <div className="mobile-hidden"><SnsVertical /></div>
        <PageTop 
            title="WORKS"
            text="展示作品一覧"
        />

        <div className="works-wrapper">
        <WorksPagenation/>
        </div>

        <div className="mg-80"></div>

         
    </div>
  );
}

export default Works;
