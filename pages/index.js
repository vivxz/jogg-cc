import React, {useState} from 'react';
import useSWR from 'swr'
import GridView from '../components/GridView';
import ListView from '../components/ListView';
import GridActive from '../svgs/grid-view.svg';
import ListActive from '../svgs/list-view.svg';
import Loading from '../svgs/loading.svg';
import GridInactive from '../svgs/grid-view-inactive.svg';
import ListInactive from '../svgs/list-view-inactive.svg';
import styling from '../styles/stylesheet';

const Index = () => {
  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {items, error} = useSWR('/api/cards', getData);

  async function getData (...args) {
    const data = await fetch(...args)
    .then((res) => res.json())
    setData(data); // Adding retrieved data to state
    setTimeout(() => setLoading(false), 1500); // Loading screen will last 1.5 seconds
  }
  
  if (error) {
    console.error(error)
  }

  const gridView = () => {
    setGrid(true);
    setList(false);
  }

  const listView = () => {
    setList(true);
    setGrid(false);
  }
  
  return (
    <div>
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
      {/* Loading or Content */}
      {loading ? <styling.Loader> <Loading /> </styling.Loader> : 
      <styling.Content>
        {grid ? <GridView data={data} />
        : list ?  <ListView data={data} />
        : null} 
      </styling.Content>
      }
    </styling.Body>
    </div>
  )
}

export default Index;