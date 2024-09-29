import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = (triggerFetch) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			const response = await axios.get('/users');
			const data = response.data;

			setUsers(data);
			setIsLoading(false);
		};

		fetchData();
	}, [triggerFetch]);

	return (
		<div>
			<h2>Users</h2>

			{isLoading && <p>Loading...</p>}

			<ul>
				{users.map((user, index) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
