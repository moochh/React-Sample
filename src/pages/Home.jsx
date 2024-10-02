// Home.jsx
import React, { useState } from 'react';
import CatFact from '../components/CatFact';
import Nav from '../components/Nav';
import Users from '../components/Users';
import ImageUpload from '../components/ImageUpload';
import axios from 'axios';

const Home = () => {
	const [triggerFetch, setTriggerFetch] = useState(false);

	// const getFact = async () => {
	// 	try {
	// 		const response = await axios.get('/catfact');
	// 		const data = response.data;
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.error('ERROR STATUS:', error.response.status);
	// 	}
	// };

	const getFact = async () => {
		try {
			const response = await axios.get('/catfact');
		} catch (error) {
			console.error('ERROR STATUS:', error.response.status);
		}
	};

	getFact();

	const handleChange = () => {
		setTriggerFetch((prev) => !prev);
	};

	return (
		<div>
			<Nav />
			<h1>Home Page v2</h1>
			<ImageUpload />
			<button onClick={handleChange}>Change Users</button>
			<Users triggerFetch={triggerFetch} />
		</div>
	);
};

export default Home;
