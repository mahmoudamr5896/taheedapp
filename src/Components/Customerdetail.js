// src/components/CustomerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import './CustomerDetails.css';

const CustomerDetails = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch the customer details based on the id
  const customer = {
    name: 'عبدالله',
    motorcycles: 30,
    contracts: 2,
    paidRentals: '75,240',
    contractDetails: {
      contractNumber: '251223006',
      motorcycles: 15,
      remainingRentals: 16,
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">لوحـة التحكــم الخاصة بالعميل</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">مرحبا {customer.name}</h5>
          <p className="card-text">
            <strong>عدد الدراجات النارية:</strong> {customer.motorcycles}<br/>
            <strong>عدد العقود:</strong> {customer.contracts}<br/>
            <strong>الايجارات الـمدفوعـة:</strong> {customer.paidRentals}
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">تفاصيل العقد</div>
        <div className="card-body">
          <p className="card-text">
            <strong>رقم العقــد:</strong> {customer.contractDetails.contractNumber}<br/>
            <strong>عدد الدراجات النارية:</strong> {customer.contractDetails.motorcycles}<br/>
            <strong>عدد دفعات الايجار الـمتبقية:</strong> {customer.contractDetails.remainingRentals}
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary">تقدر تأجر دراجات اضافية من هنا</button>
      </div>
    </div>
  );
};

export default CustomerDetails;
