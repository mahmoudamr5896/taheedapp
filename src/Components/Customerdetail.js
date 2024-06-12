import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(`https://backend-taheed-1.onrender.com/users/${id}`);
        setCustomer(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching customer details');
        setLoading(false);
      }
    };

    fetchCustomerDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!customer) {
    return <div>No customer found</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">لوحـة التحكــم الخاصة بالعميل</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">مرحبا {customer.fullName}</h5>
          <p className="card-text">
            <strong>عدد الدراجات النارية:</strong> {customer.motorcycleCount}<br/>
            <strong>عدد العقود:</strong> {customer.contracts || 'N/A'}<br/>
            <strong>الايجارات الـمدفوعـة:</strong> {customer.paidRentals || 'N/A'}
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">تفاصيل العقد</div>
        <div className="card-body">
          <p className="card-text">
            <strong>رقم العقــد:</strong> {customer.contractDetails?.contractNumber || 'N/A'}<br/>
            <strong>عدد الدراجات النارية:</strong> {customer.contractDetails?.motorcycles || 'N/A'}<br/>
            <strong>عدد دفعات الايجار الـمتبقية:</strong> {customer.contractDetails?.remainingRentals || 'N/A'}
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
