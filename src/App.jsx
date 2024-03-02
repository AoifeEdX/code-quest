import './App.css';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
import CompassGame from './components/CompassGame/CompassGame';
import LivesGame from './components/LivesGame/LivesGame';
import Welcome from './components/Welcome';
// import LeaderBoardButton from './components/LeaderBoardButton';
import { Routes, Route, Navigate } from 'react-router-dom';
// import GameHtml from './pages/GameHtml';
// import HtmlChallenge from './components/HtmlChallenge/HtmlChallenge';
import HtmlGame from './components/HtmlChallenge/HtmlGame';
import BootstrapGame from './components/BootstrapChallenge/BootstrapGame';
import FinalScores from './pages/FinalScores/FinalScores'; 

function App() {

  return (
    <>
		<Header />
    <Routes >       
      <Route path='/' element={<Welcome />} />
        {/* <Welcome /> */}
      {/* <Route path='/game' element={<Game />} /> */}
      <Route path='/level2' element={<HtmlGame />} />			
      <Route path='/level3' element={<BootstrapGame />} />			
			<Route path="/final-scores" element={<FinalScores />} /> 
			<Route path="*" element={<Navigate to="/" />} />

    </Routes>
      {/* <Game/> */}
			{/* <LivesGame /> */}
			{/* <CompassGame />			 */}
      {/* <LeaderBoardButton /> */}
			{/* <CompassGame />				 */}
      {/* <GameHtml /> */}
    </>
  )
}

export default App
