// src/ImageUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [message, setMessage] = useState('');

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleUpload = async () => {
		if (!selectedFile) {
			setMessage('Please select a file first.');
			return;
		}

		const formData = new FormData();
		formData.append('image', selectedFile);

		try {
			const response = await axios.post(
				'http://localhost:3000/upload',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			);
			setMessage(response.data.message);
		} catch (error) {
			console.error('Error uploading the image:', error);
			setMessage('Error uploading the image.');
		}
	};

	return (
		<div>
			<h2>Upload an Image</h2>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleUpload}>Upload</button>
			{message && <p>{message}</p>}
		</div>
	);
};

export default ImageUpload;
