import React, { useState } from 'react';
import axios from 'axios';

export default function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://backend-taheed.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        console.log('File uploaded successfully');
      } else {
        console.error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 w-md-80 w-lg-50 h-100 d-flex flex-column align-items-center border pt-5 ">
        <form onSubmit={handleSubmit}>
          <input
            className='control-form'
            type='file'
            onChange={handleFileChange}
            placeholder='ارفق صورتك هنا'
            required
          />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
