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
import GridActive from '../svgs/grid-view.svg';
import ListActive from '../svgs/list-view.svg';
import GridInactive from '../svgs/grid-view-inactive.svg';
import ListInactive from '../svgs/list-view-inactive.svg';
import styling from '../styles/stylesheet';

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
    <styling.Body>
      <styling.Header>

        {/* Title */}
        <styling.Title>
          My Joggs
        </styling.Title>

        {/* Toggle between grid and list */}
        <styling.Icontainer>
          {grid ? <styling.ViewStyle onClick={gridView}> <GridActive /> </styling.ViewStyle> : <styling.ViewStyle onClick={gridView}><GridInactive /></styling.ViewStyle>}
          {list ? <styling.ViewStyle onClick={listView}><ListActive /></styling.ViewStyle> : <styling.ViewStyle onClick={listView}><ListInactive /></styling.ViewStyle>}
        </styling.Icontainer>

      </styling.Header>

      {/* Content depending on whether grid or list is clicked */}
      <styling.Content>
        {grid ? <GridView data={data} />
        : list ?  <ListView data={data} />
        : null} 
      </styling.Content>
      
    </styling.Body>
  )
}

export default Index