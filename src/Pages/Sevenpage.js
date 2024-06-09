import React from 'react'
import { Link } from 'react-router-dom'

export default function Sevenpage() {
  return (
    <div>
   
      <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
        <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
          <p className="text-end text-Primary fs-4">
             و ّدك نأجرهم على شـركة وحدة<br></br> 
             او نوزعهم على شركات متعددة<br></br>
            عشان نقلل الـمخاطر ؟ <br></br>
            <h6>    دائما ننصح بتوزيع الدراجات النارية على عدة
            شـركات لتقليل الـمخاطر</h6>
           
          </p>
          <input
            type="cheekbox"
            placeholder="نعم ارغب بتأجيـر الدراجات النارية على شـركات متفرقة لتقليل المخاطر"
            className="form-control mb-2"
          ></input>
          <div className="">
            <Link to="/3" className="btn btn-dark col-10">
              التالي
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
