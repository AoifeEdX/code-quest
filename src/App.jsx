
import './App.css';
import '@fontsource/source-code-pro'; 
import "@fontsource/source-code-pro/700.css";
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Game from './pages/Game/Game';
import Welcome from './components/Welcome';
import { Routes, Route, Navigate } from 'react-router-dom';
import HtmlGame from './components/HtmlChallenge/HtmlGame';
import BootstrapGame from './components/BootstrapChallenge/BootstrapGame';
import FinalScores from './pages/FinalScores/FinalScores'; 
import { Toaster } from 'react-hot-toast';
import HtmlGameWelcome from './components/HtmlChallenge/HtmlGameWelcome';
import BootstrapGameWelcome from './components/BootstrapChallenge/BootstrapGameWelcome';

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
      <Route path='/level2welcome' element={<HtmlGameWelcome />} />			
      <Route path='/level2' element={<HtmlGame />} />		
      <Route path='/level3welcome' element={<BootstrapGameWelcome />} />		

      <Route path='/level3' element={<BootstrapGame />} />			
			<Route path="/final-scores" element={<FinalScores />} /> 
			<Route path="/about" element={<About />} /> 						
			<Route path="/contact" element={<Contact />} /> 
			<Route path="*" element={<Navigate to="/" />} />
    </Routes>
		<Footer />
    </>
  )
}

export default App
