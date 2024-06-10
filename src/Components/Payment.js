import React, { useState } from 'react';
import './PaymentInfo.css';
import { Link } from 'react-router-dom';

export default function PaymentInfo({ updateFormData, onNext }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the file and navigate to the next page
    // updateFormData(file)
    onNext();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 w-md-80 w-lg-50 h-100 d-flex flex-column align-items-center border pt-5 ">
        <p className="fs-4">سعيديـن بثقتــك</p>
        <p className="fs-5">
          نأمل تحويل المبلغ الـمستحق 5590 ريال
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
            <button type="submit" className="btn btn-dark">التالي</button>
          </div>
        </form>
      </div>
    </div>
  );
}
