// export default function Index() {
//   const getData = async () => {
//     const data = await fetch("/api/cards").then((res) => res.json());
//     console.log(data);
//   };

//   getData();

//   return <div>Start building your app 🤟</div>;
// }

import React, {useState, useEffect} from 'react';
import GridView from '../components/GridView';
import ListView from '../components/ListView';
import GridIcon from '../svgs/grid-view.svg';
import ListIcon from '../svgs/list-view.svg';

const Index = () => {
  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [data, setData] = useState([]);

  const gridView = () => {
    setGrid(true);
    setList(false);
  }

  const listView = () => {
    setList(true);
    setGrid(false);
  }

  async function getData () {
    const items = await fetch('/api/cards')
    .then((res) => res.json())
    setData(items)
  }
  
  useEffect(() => {
    getData();
  }, [grid, list])

  return (
    <div>
      <div>
      My Joggs
        <span>
          {grid ? <GridIcon id='active' onClick={gridView} /> : <GridIcon id='deactive' onClick={gridView} />}
          {list ? <ListIcon id='active' onClick={listView} /> : <ListIcon id='deactive' onClick={listView} />}
        </span>
      </div>

      {grid ? <GridView data={data} />
      : list ? <ListView data={data} />
      : null} 
      
    </div>
  )
}

export default Index