import React, { useState } from "react";
import './Firstpage.css';

export default function Fifthpage({ updateFormData, onNext }) {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [error, setError] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleNationalIDChange = (e) => {
    setNationalID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex patterns for validation
    const fullNamePattern = /^[\u0600-\u06FFa-zA-Z ]+$/; // Arabic and English letters and spaces
    const nationalIDPattern = /^\d{14}$/; // 14 digit number

    if (!fullName || !nationalID) {
      setError("الرجاء إدخال الاسم الكامل ورقم الهوية الوطنية");
      return;
    }

    if (!fullNamePattern.test(fullName)) {
      setError("الرجاء إدخال اسم كامل صالح");
      return;
    }

    if (!nationalIDPattern.test(nationalID)) {
      setError("الرجاء إدخال رقم هوية وطنية صالح");
      return;
    }

    updateFormData({ fullName, nationalID });
    onNext();
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          أدخل الاسم الكامل ورقم الهوية الوطنية
        </p>
        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="text"
            placeholder="ادخل الاسم الكامل"
            className="form-control mb-2"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          <input
            type="text"
            placeholder="ادخل رقم الهوية الوطنية"
            className="form-control mb-2"
            value={nationalID}
            onChange={handleNationalIDChange}
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
