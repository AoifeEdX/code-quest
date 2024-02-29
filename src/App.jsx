// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Game from './pages/Game/Game'
import Welcome from './components/Welcome/index'

import LeaderBoardButton from './components/LeaderBoardButton'


function App() {

  return (
    <>
      <Welcome />
      <LeaderBoardButton />
      <Game/>

    </>
  )
}

export default App
