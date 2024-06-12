import React, { useState } from "react";
import './Firstpage.css';

export default function Fourthpage({ updateFormData, onNext }) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phonePattern = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

    if (!phone) {
      setError("الرجاء إدخال رقم الهاتف");
      return;
    }

    if (!phonePattern.test(phone)) {
      setError("الرجاء إدخال رقم هاتف صالح");
      return;
    }

    updateFormData({ phone });
    onNext();
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          أدخل رقم هاتفك
        </p>
        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="text"
            placeholder="ادخل رقم الهاتف"
            className="form-control mb-2"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {error && <p className="text-danger">{error}</p>}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark">التالي  </button>
          </div>        </form>
      </div>
    </div>
  );
}
