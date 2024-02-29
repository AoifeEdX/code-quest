// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Game from './pages/Game/Game'
import Welcome from './components/Welcome/index'
import LeaderBoard from './components/Leaderboard'

function App() {

  return (
    <>
      <Welcome />
      <Game/>
      <LeaderBoard />
    </>
  )
}

export default App
