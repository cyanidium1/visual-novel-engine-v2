import { Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import bgi from '../images/main.jpg';
import About from './About/About';
import Intro from './Intro/Intro';
import Game from './Game/Game';
import Story from './Story/Story';

export const App = () => {
  //adaptive sht
  const windowHeight = window.screen.height >= 600 ? 600 : window.screen.height
  const coefH = windowHeight / 600 >= 1 ? 1 : windowHeight / 600

  const gameDim = {
    //also adaptive
    width: windowHeight * 1.333,
    height: windowHeight > 600 ? 600 : windowHeight,
    margin: '0 auto',
    padding: 0,
    backgroundImage: `url(${bgi})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={gameDim}>
      <Routes>
        <Route path="*" element={<Menu ch={coefH}/>} />
        <Route path="/intro" element={<Intro ch={coefH}/>} />
        <Route path="/game" element={<Game ch={coefH}/>} />
        <Route path="/about" element={<About ch={coefH}/>} />
        <Route path="/story" element={<Story ch={coefH}/>} />
      </Routes>
    </div>
  );
};
