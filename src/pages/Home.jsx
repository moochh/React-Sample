// Home.jsx
import React, { useState } from 'react';
import CatFact from '../components/CatFact';
import Nav from '../components/Nav';
import Users from '../components/Users';

const Home = () => {
	const [triggerFetch, setTriggerFetch] = useState(false);

	const handleChange = () => {
		// Change the state to trigger re-fetching
		setTriggerFetch((prev) => !prev);
	};

	return (
		<div>
			<Nav />
			<h1>Home Page</h1>
			<button onClick={handleChange}>Change Users</button>
			<Users triggerFetch={triggerFetch} />
		</div>
	);
};

export default Home;
