import React, { useState } from "react";
import './Firstpage.css';

export default function Thirdpage({ updateFormData, onNext }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code) {
      setError("الرجاء إدخال كود التحقق");
      return;
    }

    updateFormData({ code });
    onNext();
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          وصلك كود التحقق <br />على بريدك الالكتـرونـي ؟
        </p>
        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="text"
            placeholder="ادخل كــــود التحقـق"
            className="form-control mb-2"
            value={code}
            onChange={handleCodeChange}
            required
          />
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-dark col-2">التالي</button>
        </form>
      </div>
    </div>
  );
}
