import logo from './logo.svg';
import './App.css';
import { dummy } from './dummy';
import { useState } from 'react';
import TextList from './components/TextList';
function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    setData(dummy);
  };

  return (
    <div className="App">
      <TextList />
    </div>
  );
}

export default App;
