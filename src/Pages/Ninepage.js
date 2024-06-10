import React from 'react';
import { Link } from 'react-router-dom';
import './Ninepage.css'; // Optional for additional styles
import './Firstpage.css'
export default function Ninepage() {
  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 w-md-80 w-lg-50 h-100 d-flex flex-column align-items-center border pt-5 ">
        <p className="text-start text-primary fs-4">
          الإتفاقية
        </p>
        <div className='responsive text-end mb-4 col-6 border p-2' >
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
        <input
          type="chekbox"
          placeholder="اوافق على بنود الاتفاقية و موافقتي بمثابة توقيع رسمي و معتمد دون الحاجة الى توقيع
المستند يدويا"
          className="form-control mb-3 text-end col-4"
        ></input>
        <div className="row w-100">
          <span className="col-12 col-md-8 fs-6 text-end mb-2 mb-md-0">
            سوف يتم ارسال نسخة موقعة من قبلنا على بريدك الالكتروني بعد انهاءك لجميع خطوات التسجيل
          </span>
          <Link to="/9" className="btn btn-dark col-12 col-md-4">
            التالي
          </Link>
        </div>
      </div>
    </div>
  );
}