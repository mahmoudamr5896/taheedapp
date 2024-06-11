import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Firstpage.css';

export default function Sevenpage({  onNext }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update form data with the checkbox value
    // Navigate to the next page
    try{
      onNext();
      // onChange();

    }catch(e){
     console.log(e);
    }
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          ودك نأجرهم على شركة وحدة أو نوزعهم على شركات متعددة عشان نقلل المخاطر؟
        </p>
        <h6>دائما ننصح بتوزيع الدراجات النارية على عدة شركات لتقليل المخاطر</h6>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              نعم، أرغب بتأجير الدراجات النارية على شركات متفرقة لتقليل المخاطر
            </label>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-dark col-10">التالي</button>
          </div>
        </form>
      </div>
    </div>
  );
}
