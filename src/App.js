import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import './index.css';


function App() {
  const result = React.useState('Yes');
  const [randomArr, setRandomArr] = React.useState(['Random1', 'Random2']);

  const addRandom = () => {
    setRandomArr(prevState => {
      return [...prevState, `Random${prevState.length + 1}`];
    });
  }

  return (
    <div className="main">
      <Header />
      <Meme /> 
    </div>
  );
}

export default App;
