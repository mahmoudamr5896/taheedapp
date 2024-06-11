import React, { useState } from "react";
import './Firstpage.css';
import axios from "axios";

export default function Thirdpage({ updateFormData, onNext, formData }) {
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

    try {
      const response = await axios.post("https://backend-taheed.onrender.com/verify", {
        email: formData.email,
        verificationCode: code
      });
      
      if (response.status === 200) {
        // Handle success
        console.log('Verification successful');
        updateFormData({ code }); // Move inside if block
        onNext(); // Move inside if block
      } else {
        // Handle error
        console.error('Failed to verify');
      }
    } catch (error) {
      console.error('Error verifying:', error);
    }
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
