import './App.css'
import Game from './pages/Game/Game'
import Header from './components/Header/Header';
import Welcome from './components/Welcome';
import LeaderBoardButton from './components/LeaderBoardButton'
import Game from './pages/Game/Game';
import CompassGame from './components/CompassGame/CompassGame';
import LivesGame from './components/LivesGame/LivesGame';


function App() {

  return (
    <>
		<Header />
      <Welcome />      
      <Game/>
			<LivesGame />
			<CompassGame />			
      <LeaderBoardButton />
    </>
  )
}

export default App