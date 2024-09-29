import React, { useState, useEffect } from 'react';

const Users = (triggerFetch) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const usersEndpoint = 'https://express-server-3w2m.onrender.com/users';

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			const fetchedUsers = await fetch(usersEndpoint).then((res) => res.json());

			const processedUsers = fetchedUsers.map((user) => {
				return user.results[0];
			});

			setUsers(processedUsers);
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
					<li key={user.id}>
						{user.name.first} {user.name.last}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
