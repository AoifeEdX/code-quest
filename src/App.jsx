import './App.css';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
import CompassGame from './components/CompassGame/CompassGame';
import LivesGame from './components/LivesGame/LivesGame';
import Welcome from './components/Welcome';
import { Routes, Route, Navigate } from 'react-router-dom';
import HtmlGame from './components/HtmlChallenge/HtmlGame';
import BootstrapGame from './components/BootstrapChallenge/BootstrapGame';
import FinalScores from './pages/FinalScores/FinalScores'; 
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
       <Routes >       
      <Route path='/' element={<Welcome />} />
      <Route path='/level1' element={<Game />} />
      <Route path='/level2' element={<HtmlGame />} />			
      <Route path='/level3' element={<BootstrapGame />} />			
			<Route path="/final-scores" element={<FinalScores />} /> 
			<Route path="*" element={<Navigate to="/" />} />

    </Routes>
    </>
  )
}

export default App
