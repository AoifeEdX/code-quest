
import './App.css';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
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
      <Toaster  reverseOrder={false}  containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}/>
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
