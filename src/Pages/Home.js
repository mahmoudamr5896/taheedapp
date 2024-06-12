import React, { useState, useEffect } from 'react';
import Firstpage from '../Components/Firstpage';
import Secondpage from '../Components/Secondpage';
import Thirdpage from '../Components/Thirdpage';
import Fourthpage from '../Components/Fourpage';
import Fifthpage from '../Components/Fivepage';
import Sixthpage from '../Components/Sixpage';
import Seventhpage from '../Components/Sevenpage';
import Eightpage from '../Components/Eightpage';
import Ninthpage from '../Components/Ninepage';
import PaymentInfo from '../Components/Payment';
import RegistrationCheck from '../Components/Thanks';

export default function Home() {
    const [currentPage, setCurrentPage] = useState('first');
    const [formData, setFormData] = useState({
      email: '',
      code:'',
      phone: '',
      fullName: '',
      nationalID: '',
      motorcycleCount: '',
      receiptDocument: '' // Add numberOfMotorcycles to formData
    });
    // {
    //     "email":"mahmoudamr5896@gmail.com"
    //     , "phone":"01060860534",
    //      "fullName":"mahmoud amr hassan"
    //      , "nationalID":"296080522935"
    //      , "motorcycleCount":"2333", 
    //       "receiptDocument" :"onjnkjd.png"
    // }
  
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
      console.log(formData);
    };
  
    const handleNextPage = (nextPage) => {
      setCurrentPage(nextPage);
    };
  
    const handleSubmitRegistration = async () => {
      try {
        const response = await fetch('https://backend-taheed-1.onrender.com/registration-complete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle success
          console.log('Data submitted successfully');
          handleNextPage('registrationCheck')
          // You may want to navigate to a confirmation page here
        } else {
          // Handle error
          console.error('Failed to submit data');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }

    };
  

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border">
        {currentPage === 'first' && <Firstpage />}
        {currentPage === 'second' && <Secondpage updateFormData={updateFormData} onNext={() => handleNextPage('third')} />}

        {currentPage === 'third' && <Thirdpage updateFormData={updateFormData} onNext={() =>  handleNextPage('fourth') } formData={formData} />}
        {currentPage === 'fourth' && <Fourthpage updateFormData={updateFormData} onNext={() => handleNextPage('fifth')} />}
        {currentPage === 'fifth' && <Fifthpage updateFormData={updateFormData} onNext={() => handleNextPage('sixth')} />}
        {currentPage === 'sixth' && <Sixthpage updateFormData={updateFormData} onNext={() => handleNextPage('seventh')} />}
        {currentPage === 'seventh' && <Seventhpage  onNext={() => handleNextPage('eight')} />}
        {currentPage === 'eight' && <Eightpage formData={formData} onNext={() => handleNextPage('nine')} />}
        {currentPage === 'nine' && <Ninthpage formData={formData} onNext={() => handleNextPage('payment')} />}
        {currentPage === 'payment' && <PaymentInfo formData={formData} updateFormData={updateFormData} onNext={handleSubmitRegistration} />}
        {currentPage === 'registrationCheck' && <RegistrationCheck />}
      </div>
    </div>
  );
}
