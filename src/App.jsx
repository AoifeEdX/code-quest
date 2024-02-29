import React from 'react';
import Header from './components/Header/Header';
import Game from './components/Main/GameTest'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <>
		<Header className='w-100'/>
		<Container className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <Game />
			</Container>
    </>
  )
}

export default App
