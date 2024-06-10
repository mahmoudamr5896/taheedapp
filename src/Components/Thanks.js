import React from 'react';
import './RegistrationCheck.css';

export default function RegistrationCheck() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 w-md-80 w-lg-50 h-100 d-flex flex-column align-items-center border pt-5 ">
        <p className="fs-4">شكــرا لك</p>
        <p className="fs-5">
          جاري التحقق من اتمام خطوات التسجيل
          <br />
          سيتم ابلاغك عبر البريد الالكتروني عند الانتهاء من المراجعة
        </p>
        <p className="fs-6">
          تستطيع تسجيل الدخول والاطلاع على المعلومات
          <br />
          بعد التحقق من اتمام خطوات التسجيل
        </p>
      </div>
    </div>
  );
}
