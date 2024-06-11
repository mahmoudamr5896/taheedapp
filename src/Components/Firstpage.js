import './Firstpage.css';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Secondpage from './Secondpage';

function Firstpage() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      // navigate('/1');
      return (
        <Secondpage></Secondpage>
      )
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border">
        <div className="d-flex align-items-center mb-3">
          <h6 className="ml-2">للاعمال</h6>
          <h1 className="ml-2">تعهيد</h1>
          <img src="image.png" width="30px" alt="logo" />
        </div>
        <p className="text-end">أهلا وسهلا</p>
        <div
          style={{ backgroundColor: 'rgb(65, 105, 225)', width: '300px', padding: '10px' }}
          className="text-white"
        >
          <h1>بكل بساطة اشتر دباب واجره</h1>
          <h2>من خلالنا شركات معتمده</h2>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
