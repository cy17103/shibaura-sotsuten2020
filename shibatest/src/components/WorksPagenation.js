import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollToTop from './ScrollToTop';
import Pagination from '@material-ui/lab/Pagination';
import WorksTable from './WorksTable';


const WorksArray = [
  {title:'作品のタイトル1',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'WorksItemBG01.png'},
  {title:'作品のタイトル2',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル3',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル4',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル5',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル6',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル7',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル8',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル9',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル10',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル11',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル12',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル13',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル14',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル15',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル16',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル17',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル18',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル19',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル20',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル21',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'},
  {title:'作品のタイトル22',name:'芝浦太郎',lab:'完成インタラクション研究室',image:'news-default.png'}
];

const count = Math.ceil(WorksArray.length / 9);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      <WorksTable list={WorksArray} page={page}/>
      <Pagination count={count} size="large" page={page} onChange={handleChange}/>
    </div>
  );
}