import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Firstpage.css';

export default function Ninepage({ updateFormData, onNext }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      // Update form data with the checkbox value
      // updateFormData({ agreed: true });
      // Navigate to the next page
      onNext();
    } else {
      // Show error or prompt to agree
    }
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 w-md-80 w-lg-50 h-100 d-flex flex-column align-items-center border pt-5 ">
        <p className="text-start text-primary fs-4">
          الإتفاقية
        </p>
        <div className='responsive text-end mb-4 col-6 border p-2'>
          بناء على البيانات المدخلة من قبلك تم اعداد هذه الاتفاقية , و عدد اطراف الاتفاقية
          اثنان “نحن” نمثل الطرف الاول و “انت” تمثل الطرف الثانـي و تتمثل بنود الاتفاقية
          بالتالي : بناء على البيانات المدخلة من قبلك تم اعداد هذه الاتفاقية , و عدد اطراف
          الاتفاقية اثنان “نحن” نمثل الطرف الاول و “انت” تمثل الطرف الثانـي و تتمثل بنود
          الاتفاقية بالتالي : بناء على البيانات المدخلة من قبلك تم اعداد هذه الاتفاقية , و عدد
          اطراف الاتفاقية اثنان “نحن” نمثل الطرف الاول و “انت” تمثل الطرف الثانـي و
          تتمثل بنود الاتفاقية بالتالي : بناء على البيانات المدخلة من قبلك تم اعداد هذه بناء على البيانات المدخلة من قبلك تم اعداد هذه
          الاتفاقية , و عدد اطراف الاتفاقية اثنان “نحن” نمثل الطرف الاول و “انت” تمثل
          الطرف الثانـي و تتمثل بنود الاتفاقية بالتالي : اطراف الاتفاقية اثنان “نحن” نمثل
          الطرف الاول و “انت” تمثل الطرف الثانـي و تتمثل بنود الاتفاقية بالتالي : بناء على
          البيانات المدخلة من قبلك تم اعداد هذه الاتفاقية , و عدد اطراف الاتفاقية اثنان
          “نحن” نمثل الطرف الاول و “انت” تمثل الطرف الثانـي و تتمثل بنود الاتفاقية
        </div>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              أوافق على بنود الاتفاقية وموافقتي تعتبر توقيعًا رسميًا ومعتمدًا دون الحاجة إلى توقيع المستند يدويًا
            </label>
          </div>
          <div className="row w-100">
            <span className="col-12 col-md-8 fs-6 text-end mb-2 mb-md-0">
              سيتم إرسال نسخة موقعة من قبلنا إلى بريدك الإلكتروني بعد اكتمال عملية التسجيل
            </span>
            <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark">التالي  </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
