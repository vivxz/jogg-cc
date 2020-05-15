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

import styling from '../styles/style';

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
        <styling.Title>
          My Joggs
        </styling.Title>

        {/* <span>
          {grid ? <styling.SVGStyle><GridIcon id='active' onClick={gridView} /></styling.SVGStyle> : <styling.SVGStyle><GridIcon id='deactive' onClick={gridView} /></styling.SVGStyle>}
          {list ? <styling.SVGStyle><ListIcon id='active' onClick={listView} /></styling.SVGStyle> : <styling.SVGStyle><ListIcon id='deactive' onClick={listView} /></styling.SVGStyle>}
        </span> */}

        <styling.Icontainer>
          <styling.ViewStyle onClick={gridView}><GridIcon /></styling.ViewStyle>
          <styling.ViewStyle onClick={listView}><ListIcon /></styling.ViewStyle>
        </styling.Icontainer>

      </styling.Header>

      <styling.Content>
        {grid ? <GridView data={data} />
        : list ?  <ListView data={data} />
        : null} 
      </styling.Content>
      
    </styling.Body>
  )
}

export default Index