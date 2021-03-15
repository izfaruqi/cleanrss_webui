import { Card } from 'antd';
import { useEffect } from 'react';
import { refreshProviders, refreshReader } from '../api';
import Content from './MainScreen/Content';
import TopBar from './MainScreen/TopBar';
import HBar from './utils/dividers/HBar';

function App() {
  useEffect(() => {
    refreshProviders()
    refreshReader({ id: 371 })
  }, [])

  return (
    <div style={{ width: "100%", height: "100%", padding: 10 }}>
      <Card bodyStyle={{ padding: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} style={{  width: "100%", height: "100%" }}>
        <TopBar></TopBar>
        <HBar></HBar>
        <Content style={{ flexGrow: 1, minHeight: 0 }}></Content>
      </Card>
    </div>
  );
}

export default App;
