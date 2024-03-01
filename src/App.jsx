import './App.css';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
import CompassGame from './components/CompassGame/CompassGame';
import LivesGame from './components/LivesGame/LivesGame';
import Welcome from './components/Welcome';
import LeaderBoardButton from './components/LeaderBoardButton';

function App() {

  return (
    <>
		<Header />
      <Game/>
			
    </>
  )
}

export default App