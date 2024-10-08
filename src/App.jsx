// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Image from './pages/Image';
import axios from 'axios';

axios.defaults.baseURL = 'https://vercel-server-flax.vercel.app';
// axios.defaults.baseURL = 'http://localhost:3000';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/image" element={<Image />} />
			</Routes>
		</Router>
	);
}

export default App;
