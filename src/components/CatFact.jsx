// CatFact.jsx
import React, { useEffect, useState } from 'react';

const CatFact = ({ triggerFetch }) => {
	const [fact, setFact] = useState('');
	const url = 'https://catfact.ninja/fact';

	// Fetch url
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url);
			const data = await response.json();
			setFact(data.fact);
		};
		fetchData();
	}, [triggerFetch]);

	return <p>{fact}</p>;
};

export default CatFact;
