import './App.css';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
// import CompassGame from './components/CompassGame/CompassGame';
// import LivesGame from './components/LivesGame/LivesGame';
import Welcome from './components/Welcome';
// import LeaderBoardButton from './components/LeaderBoardButton';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
		<Header />
    <Routes >

      <Route path='/' element={<Welcome />} />
        {/* <Welcome /> */}
      <Route path='/game' element={<Game />} />

    </Routes>
      {/* <Game/> */}
			{/* <LivesGame /> */}
			{/* <CompassGame />			 */}
      {/* <LeaderBoardButton /> */}
			{/* <CompassGame />				 */}
    </>
  )
}

export default App