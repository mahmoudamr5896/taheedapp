import React, { useState } from "react";
import axios from "axios";

export default function Secondpage({ updateFormData, onNext }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError("الرجاء إدخال بريد إلكتروني صالح");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Handle success
        console.log('Email submitted successfully');
        onNext();
      } else {
        // Handle error
        console.error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }
    localStorage.setItem('email',email)
    updateFormData({ email });
    console.log(email);
    onNext();
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-20 h-100 d-flex flex-column align-items-center border">
        <h3>اهلا وسهلا</h3>
        <p className="text-end text-Primary fs-4">
          من هنا خطوتك الأولـى لشراء<br /> دراجة نارية ثم تأجيـرها على شركات<br /> معتمدة من خلالنــا
        </p>
        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="email"
            placeholder="ادخل بريدك الالكـتـرونـي"
            className="form-control mb-2"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-dark w-100">التالي</button>
        </form>
      </div>
    </div>
  );
}
