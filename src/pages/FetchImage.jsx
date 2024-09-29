import React, { useState } from 'react';

const FetchImage = () => {
	const [imageId, setImageId] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const fetchImage = async () => {
		if (!imageId) {
			setErrorMessage('Please enter an image ID');
			setImageUrl('');
			return;
		}

		try {
			const response = await fetch(
				`https://vercel-server-flax.vercel.app/image/${imageId}`
			);
			if (!response.ok) {
				throw new Error('Image not found');
			}

			const blob = await response.blob();
			const url = URL.createObjectURL(blob);
			setImageUrl(url);
			setErrorMessage(''); // Clear any previous error messages
		} catch (error) {
			console.error('Error fetching the image:', error);
			setErrorMessage('Failed to load image. Please check the ID.');
			setImageUrl(''); // Clear image URL on error
		}
	};

	return (
		<div>
			<h1>Fetch Image by ID</h1>
			<input
				type="text"
				value={imageId}
				onChange={(e) => setImageId(e.target.value)}
				placeholder="Enter image ID"
			/>
			<button onClick={fetchImage}>Fetch Image</button>
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
			{imageUrl && (
				<img
					src={imageUrl}
					alt="Fetched"
					style={{ maxWidth: '100%', maxHeight: '400px' }}
				/>
			)}
		</div>
	);
};

export default FetchImage;
