import React, { useState } from "react";
import './Firstpage.css'

export default function Eightpage({ formData, onNext }) {
  const [checked, setChecked] = useState(false);
  const [Totalprice, setTotalprice] = useState(0);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onNext();
  };

  // Calculate total price when formData changes
  useState(() => {
    setTotalprice(formData.motorcycleCount * 5950); // Assuming the price per motorcycle is 5950
  }, [formData]);

  return (
    <div>
      <div className="iphone-border  d-flex justify-content-center align-items-center vh-100 mb-5">
        <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
          <p className="text-end text-Primary fs-4">
            إجمالـي المبلغ المطلوب سداده<br></br>
            {Totalprice} ريال 
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
            <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark">التالي  </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
