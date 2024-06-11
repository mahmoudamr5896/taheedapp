import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Firstpage.css'

export default function Eightpage({ updateFormData, onNext }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update form data with the checkbox value
    // updateFormData('ss');
    // Navigate to the next page
    onNext();
  };

  return (
    <div>
      <div className="iphone-border  d-flex justify-content-center align-items-center vh-100 mb-5">
        <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
          <p className="text-end text-Primary fs-4">
            إجمالـي المبلغ المطلوب سداده<br></br>
            5950 ريال 
            <br></br> 
            سوف تؤجر بـ 500 ريال شهريا <br></br>
            لمدة 18 شهر
            <h6> لقد فهمت ذلك سعر بيع الدراجة بعد انتهاء فترة التأجير
            يحدد لاحقا</h6>
          </p>
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
                لقد فهمت ذلك
              </label>
            </div>
            <div className="">
              <button type="submit" className="btn btn-dark col-10">التالي</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
