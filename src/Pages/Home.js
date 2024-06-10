import React, { useState, useEffect } from 'react';
import Firstpage from './Firstpage';
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';
import Fourthpage from './Fourpage';
import Fifthpage from './Fivepage';
import Sixthpage from './Sixpage';
import Seventhpage from './Sevenpage';
import Eightpage from './Eightpage';
import Ninthpage from './Ninepage';
import PaymentInfo from '../Components/Payment';
import RegistrationCheck from '../Components/Thanks';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('first');
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    phone: '',
    fullName: '',
    nationalID: '',
    additionalData: '',
    numberOfMotorcycles: '',
    file:'' // Add numberOfMotorcycles to formData
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('second');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleNextPage = (nextPage) => {
    setCurrentPage(nextPage);
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border">
        {currentPage === 'first' && <Firstpage />}
        {currentPage === 'second' && <Secondpage updateFormData={updateFormData} onNext={() => handleNextPage('third')} />}
        {currentPage === 'third' && <Thirdpage updateFormData={updateFormData} onNext={() => handleNextPage('fourth')} />}
        {currentPage === 'fourth' && <Fourthpage updateFormData={updateFormData} onNext={() => handleNextPage('fifth')} />}
        {currentPage === 'fifth' && <Fifthpage updateFormData={updateFormData} onNext={() => handleNextPage('sixth')} />}
        {currentPage === 'sixth' && <Sixthpage updateFormData={updateFormData} onNext={() => handleNextPage('seventh')} />}
        {currentPage === 'seventh' && <Seventhpage  onNext={() => handleNextPage('eight')} />}
        {currentPage === 'eight' && <Eightpage formData={formData} onNext={() => handleNextPage('nine')} />}
        {currentPage === 'nine' && <Ninthpage formData={formData} onNext={() => handleNextPage('payment')} />}
        {currentPage === 'payment' && <PaymentInfo formData={formData}  onNext={() => handleNextPage('registrationCheck')} />}
        {currentPage === 'registrationCheck' && <RegistrationCheck />}
      </div>
    </div>
  );
}
