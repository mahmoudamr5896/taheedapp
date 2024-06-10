import React from "react";
import { Link } from "react-router-dom";
import './Firstpage.css'
export default function Sixpage() {
  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          كم عدد الدراجات النارية<br></br> اللي ودك تشتـري ؟
        </p>
        سعر الشـراء يشمل :<br></br> الدراجة النارية 3300<br></br> ريال اصدار اللوحات 500 ريال
        <br></br>التأمين سنتين 2150 ريال
        <input
          type="text"
          placeholder="اختـر العدد من هنا"
          className="form-control mb-2"
        ></input>
        <div className="row">
          <span className="col-10 fs-6">
          كل دراجة نارية تؤجر بـ 500 ريال شهريا          </span>
          <Link to="/6" className="btn btn-dark col-2">
            التالي
          </Link>
        </div>
      </div>
    </div>
  );
}
