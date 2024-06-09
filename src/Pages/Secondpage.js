import React from "react";
import { Link } from "react-router-dom";

export default function Secondpage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-20 h-100 d-flex flex-column align-items-center border">
        <h3>اهلا وسهلا</h3>
        <p className="text-end text-Primary fs-4">
          من هنا خطوتك الأولـى لشراء<br></br> دراجة نارية ثم تأجيـرها على شركات<br></br> معتمدة من
          خلالنــا
        </p>
        <input
          type="text"
          placeholder="ادخل بريدك الالكـتـرونـي"
          className="form-control mb-2"
        ></input>
        <Link  to='/2' className="btn btn-dark">التالي</Link>
      </div>
    </div>
  );
}
