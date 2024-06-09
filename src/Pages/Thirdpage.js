import React from "react";
import { Link } from "react-router-dom";

export default function thirdpage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          وصلك كود التحقق <br></br>على بريدك الالكتـرونـي ؟
        </p>
        <input
          type="text"
          placeholder="ادخل كــــود التحقـق"
          className="form-control mb-2"
        ></input>
        <div className="row">
          <span className="col-10 fs-6">
            دخلت بريد الكتروني خاطئ ؟<Link>من هنا</Link>
          </span>
          <Link to="/3" className="btn btn-dark col-2">
            التالي
          </Link>
        </div>
      </div>
    </div>
  );
}
