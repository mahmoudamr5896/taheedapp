import React, { useState } from "react";

export default function Sixthpage({ updateFormData, onNext }) {
  const [numberOfMotorcycles, setNumberOfMotorcycles] = useState("");
  const [error, setError] = useState("");

  const handleNumberOfMotorcyclesChange = (e) => {
    setNumberOfMotorcycles(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const motorcycles = parseInt(numberOfMotorcycles, 10);

    if (isNaN(motorcycles) || motorcycles <= 0) {
      setError("الرجاء إدخال عدد صالح للدراجات النارية");
      return;
    }

    updateFormData({ motorcycleCount: motorcycles });
    onNext();
  };

  return (
    <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
      <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
        <p className="text-end text-Primary fs-4">
          كم عدد الدراجات النارية التي ترغب في شرائها؟
        </p>
        <p>
          سعر الشراء يشمل:
          <br />
          الدراجة النارية: 3300 ريال
          <br />
          رسوم اللوحات: 500 ريال
          <br />
          التأمين لمدة سنتين: 2150 ريال
        </p>
        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="number"
            placeholder="ادخل عدد الدراجات النارية"
            className="form-control mb-2"
            value={numberOfMotorcycles}
            onChange={handleNumberOfMotorcyclesChange}
            required
          />
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-dark w-100">التالي</button>
        </form>
      </div>
    </div>
  );
}
