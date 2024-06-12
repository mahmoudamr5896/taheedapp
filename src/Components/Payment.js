import React, { useState, useEffect } from 'react';
import './PaymentInfo.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function PaymentInfo({ formData, updateFormData, onNext }) {
  const [file, setFile] = useState('');
  const [Totalprice, setTotalprice] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    setTotalprice(formData.motorcycleCount * 5950); // Assuming the price per motorcycle is 5950
  }, [formData]);

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Create FormData object to send file data
      const formDataToUpdate = { ...formData, receiptDocument: file.name };
      updateFormData(formDataToUpdate);

      // Check if the file is selected
      if (formData.receiptDocument) {
        console.error('File is not selected.');
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
    
        try {
          const response = await axios.post('http://localhost:3001/upload', formData, {
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
        
      onNext();
      }else{
        console.error('File is not selected.');

      }
    
      // Update the formData object and navigate to the next page
    
    
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 w-md-80 w-lg-50 h-100 d-flex flex-column align-items-center border pt-5 ">
        <p className="fs-4">سعيديـن بثقتــك</p>
        <p className="fs-5">
          نأمل تحويل المبلغ الـمستحق {Totalprice} ريال
          <br />
          الى الحساب البنكي لـ
        </p>
        <p className="fs-5 fw-bold">
          شركة الدراجات النارية المعتمدة
          <br />
          مصرف الانماء
        </p>
        <p className="fs-6">SA395000000694525500587</p>
        <form onSubmit={handleSubmit}>
          <input
            className='control-form'
            type='file'
            onChange={handleFileChange}
            placeholder='ارفق ايصال التحويل هنا'
            required
          />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark">التالي  </button>
          </div>
        </form>
      </div>
    </div>
  );
}
