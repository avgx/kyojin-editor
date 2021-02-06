import React from 'react';
import './App.css';
import KyojinEditor from './KyojinEditor';
import { Kyojin } from '../kyojin/model';

function App() {

  const [kyojins, setKyojins] = React.useState<Kyojin[]>([]);

  const handleKyojinChange = (value: Kyojin) => {
    setKyojins([value]);
  };

  return (
    <div className="App">
      <KyojinEditor 
        //editId={null}
        kyojins={kyojins}
        onChange={handleKyojinChange}
      />
    </div>
  );
}

export default App;
