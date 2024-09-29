import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';

const Image = () => {
	const [imageId, setImageId] = useState('');
	const [images, setImages] = useState([]);
	const [imageURL, setImageURL] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://vercel-server-flax.vercel.app/get-images'
			);
			const data = await response.json();

			setImages(data);
		};

		fetchData();
	}, []);

	const fetchImage = async (imageId) => {
		try {
			const response = await fetch(
				`https://vercel-server-flax.vercel.app/image/${imageId}`
			);

			if (!response.ok) {
				throw new Error('Image not found');
			}

			const blob = await response.blob();
			const url = URL.createObjectURL(blob);
			setImageURL(url);
		} catch (error) {
			setImageURL('');
			console.error('Error fetching the image:', error);
		}
	};

	return (
		<>
			<Nav />

			<h1>Fetch Image</h1>

			<div style={{ display: 'flex', gap: '64px' }}>
				<div>
					{images.map((image, index) => (
						<button key={index} onClick={() => fetchImage(image.id)}>
							{image.id}
						</button>
					))}
				</div>

				<div>
					<img
						src={imageURL}
						style={{ maxWidth: '100%', maxHeight: '400px' }}
					/>
				</div>
			</div>
		</>
	);
};

export default Image;
