import './App.css';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
import CompassGame from './components/CompassGame/CompassGame';
import LivesGame from './components/LivesGame/LivesGame';
import Welcome from './components/Welcome';
import LeaderBoard from './components/Leaderboard';

function App() {

  return (
    <>
		<Header />
      <Welcome />
      <Game/>
			<LivesGame />
			<CompassGame />			
      <LeaderBoard />
    </>
  )
}

export default App