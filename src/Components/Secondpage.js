import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Secondpage({ updateFormData, onNext }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const[odl,setold]=useState({})
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://backend-taheed.onrender.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("الرجاء إدخال بريد إلكتروني صالح");
      return;
    }

    if (email === 'admin@gmail.com') {
      navigate('/dash');
    } else {
      const oldUser = users.find(user => user.email === email);
      if (oldUser) {
        setold(oldUser._id)
        setModal(true);
      } else {
        try {
          const response = await fetch('https://backend-taheed.onrender.com/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });

          if (response.ok) {
            console.log('Email submitted successfully');
            localStorage.setItem('email', email);
            updateFormData({ email });
            onNext();
          } else {
            setError("Failed to submit email");
            console.error('Failed to submit email');
          }
        } catch (error) {
          setError("Error submitting email");
          console.error('Error submitting email:', error);
        }
      }
    }
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
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-dark">التالي  </button>
          </div>
        </form>
      </div>
      
      {modal && (
        <div className="modal show" style={{ display: 'block' }} tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>أهلا و سهلا</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => onNext()}>أضافه عقد</button>
                <button type="button" className="btn btn-primary" onClick={() => navigate(`/${odl}`)}>لوحة التحكم</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
