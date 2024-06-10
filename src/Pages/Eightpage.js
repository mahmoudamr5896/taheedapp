import React from "react";
import { Link } from "react-router-dom";
import './Firstpage.css'
export default function Eightpage() {
  return (
    <div>
      <div className="iphone-border  d-flex justify-content-center align-items-center vh-100 mb-5">
        <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
          <p className="text-end text-Primary fs-4">
            إجمالـي الـمبلغ الـمطلوب سداده<br></br>
             5950 ريال 
            <br></br> 
            سوف تؤجر بـ 500 ريال شهريا <br></br>
            لـمدة 18 شهر
            <h6> لقد فهمت ذلك سعر بيع الدراجة بعد انتهاء فترة التأجير
            يحدد لاحقا</h6>
            
          </p>
          <input
            type="checkbox"
            placeholder="لقدفهمت ذلك"
            className="form-control mb-2"
          ></input>
          <div className="">
            <Link to="/8" className="btn btn-dark col-10">
              التالي
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}