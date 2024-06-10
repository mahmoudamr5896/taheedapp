import React from "react";
import { Link } from "react-router-dom";
import './Firstpage.css'

export default function Fivepage() {
  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          تهمنا البيانات التالية<br></br> عشان العقــد
        </p>
        <input
          type="text"
          placeholder="  اسمــك الثلاثــي"
          className="form-control mb-2"
        ></input>
        <input
          type="text"
          placeholder="رقم هويتك"
          className="form-control mb-2"
        ></input>
        <div className="row">
          <span className="col-10 fs-6">
          سيتم ادراج البيانات اعلاه بالعقد , الرجاء التأكد من صحتها          </span>
          <Link to="/5" className="btn btn-dark col-2">
            التالي
          </Link>
        </div>
      </div>
    </div>
  );
}
