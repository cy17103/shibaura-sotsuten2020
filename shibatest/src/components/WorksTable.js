import React from 'react';
import './WorksTable.css';

import WorkSmall from './WorkSmall';

class WorksTable extends React.Component{
  render(){

    /*  worksItemに渡すデータ */
    const WorksArray = this.props.list;//データ全体
    const LIST_START = (this.props.page - 1)*9;
    const LIST_END = this.props.page * 9;

    let ShowList = WorksArray.slice(LIST_START,LIST_END);

    return( 
        <div className="work-table">
          <p className="works-number">作品総数：{WorksArray.length}</p>

          <div className="work-list">
            {ShowList.map((work) =>{
                return(
                  <WorkSmall 
                    image={work.image}
                    title={work.title}
                    name={work.name}
                    lab={work.lab}
                  />
                  
                )
              })}
          </div>
        </div>
    );
    }
}

export default WorksTable;



