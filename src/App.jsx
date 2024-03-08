
import './App.css';
import '@fontsource/source-code-pro';
import "@fontsource/source-code-pro/700.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Contact from './pages/Contact';
import GitHubExplorer from './pages/Resources/GitHubExplorer/GitHubExplorer';
import VideoCourses from './pages/Resources/VideoCourses/VideoCourses';
import JavaScriptGameWelcome from './components/JavaScriptChallenge/JavaScriptGameWelcome'
import JavaScriptGame from './components/JavaScriptChallenge/JavaScriptGame';
import HtmlGameWelcome from './components/HtmlChallenge/HtmlGameWelcome';
import HtmlGame from './components/HtmlChallenge/HtmlGame';
import BootstrapGameWelcome from './components/BootstrapChallenge/BootstrapGameWelcome';
import BootstrapGame from './components/BootstrapChallenge/BootstrapGame';
import FinalScores from './pages//FinalScores';

function App() {

	return (
		<>
			<Header />
			<Toaster reverseOrder={false} containerStyle={{
			}} />
			<Routes >
				<Route path="*" element={<Navigate to="/" />} />
				<Route path='/' element={<Welcome />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/ghexplorer" element={<GitHubExplorer />} />
				<Route path="/videocourses" element={<VideoCourses />} />
				<Route path='/level1welcome' element={<JavaScriptGameWelcome />} />
				<Route path='/level1' element={<JavaScriptGame />} />
				<Route path='/level2welcome' element={<HtmlGameWelcome />} />
				<Route path='/level2' element={<HtmlGame />} />
				<Route path='/level3welcome' element={<BootstrapGameWelcome />} />
				<Route path='/level3' element={<BootstrapGame />} />
				<Route path="/final-scores" element={<FinalScores />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
