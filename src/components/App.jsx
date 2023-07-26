import { Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import bgi from '../images/main.jpg';
import About from './About/About';
import Intro from './Intro/Intro';
import Game from './Game/Game';
import Story from './Story/Story';

export const App = () => {
  const gameDim = {
    width: 800,
    height: 600,
    margin: '0 auto',
    padding: 0,
    backgroundImage: `url(${bgi})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={gameDim}>
      <Routes>
        <Route path="*" element={<Menu />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
};
