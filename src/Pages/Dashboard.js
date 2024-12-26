// src/pages/Dashboard.js
import React, { useState ,useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const[home,sethome]=useState(null)
    const[customers,setcustomers]=useState(null)
    const[bike,setbike]=useState(null)
    const[sitting,setsitting]=useState(null)
    const [users, setUsers] = useState([]);
    const[numberbike,setnumberbike]=useState(0)
    const[massage,setmassage]=useState('مرحبا بك في لوحه التحكم ')
useEffect(() => {
  // Fetch users from the API
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
useEffect(() => {
  // Calculate total number of bikes
  let number = 0;
  users.forEach((prod) => {
    number += prod.motorcycleCount || 0; // Ensure motorcycleCount is a number
  });
setnumberbike(number)

}, [users]);

    // const[home,sethome]=useState(null)
   const  handelhome=()=>{
    const data = (
        <div className="container">
        <h2 className="text-center mb-4">الرئيسية</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-3 ">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <h5 className="card-title">عدد العملاء المسجلين</h5>
                <p className="card-text">{users.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">عدد العملاء الذين اشتروا</h5>
                <p className="card-text">{users.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-info h-100">
              <div className="card-body">
                <h5 className="card-title">عدد الدراجات النارية</h5>
                <p className="card-text">{numberbike}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-body">
                <h5 className="card-title">إجمالي قيمة الدراجات النارية</h5>
                <p className="card-text">{numberbike*5590}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
 sethome(data)
 setbike(null)
 setcustomers(null)
 setsitting(null)
   setmassage('') }

   const handelcustomer = ()=>{
     
    const data = (
<>
<div className="container mt-5">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>اسم العميل</th>
            <th>الخطوات</th>
            <th>عدد الدراجات</th>
            <th>تاريخ التسجيل</th>
          </tr>
        </thead>
        <tbody>
          {users.map((customer, index) => (
            <tr key={index}>
              <td>
                {customer.fullName ? (
                                  <Link to={`/customer/${index}`}>
                {customer.fullName}
                </Link>
                ):(
                  <Link to={`/customer/${index}`}>
                  غير موجود
                  </Link>
                )}

              </td>
              {customer.isVerified ? 
              (
                <> مكتمل</>
              )
                :(
                 <>غير مكتمل</>
                
              )}
              <td>{customer.motorcycleCount}</td>
              <td>{customer.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
    )
    setcustomers(data)
    sethome(null)
    setbike(null)
    setsitting(null)
   setmassage('')}
const handelbike =()=>{
const data = (
<div className="row">
          <div className="col-md-6 col-lg-6 mb-3">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <h5 className="card-title">عدد الدراجات النارية الـمتاحة للشراء
                </h5>
                <p className="card-text">890</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">اجمالي ايجارات الدراجات النارية الشهرية
                </h5>
                <p className="card-text">{numberbike*500}</p>
              </div>
            </div>
          </div>
        </div>


)
setbike(data)
setcustomers(null)
sethome(null)
setsitting(null)
setmassage('')
}
const handleDeleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/users/${id}`);
    if (response.status === 200) {
      setUsers(users.filter(user => user.id !== id));
    } else {
      console.error('Failed to delete user');
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
  
const handelsitting =()=>{

      const data =  (
        <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item rounded-pill " >
                  <a className="nav-link" href="#users">
                    الـمستخدمين
                  </a>
                </li>
                <li className="nav-item rounded-pill" >
                  <a className="nav-link" href="#agreement-text">
                    نص الإتفاقية
                  </a>
                </li>
                <li className="nav-item rounded-pill" >
                  <a className="nav-link" href="#receipt-approval">
                    اعتماد ايصال التحويل
                  </a>
                </li>
                <li className="nav-item rounded-pill" >
                  <a className="nav-link rounded-pill" href="#general-settings">
                    اعدادات عامة
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="card mb-4" id="users">
          <div className="card-header">الـمستخدمين</div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>الـمستخدم</th>
                  <th>البريد الالكتروني</th>
                  <th>صلاحية الدخول</th>
                  <th>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.isVerified ? 'نعم' : 'لا'}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        حذف المستخدم
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  
        {/* <div className="card mb-4" id="agreement-text">
          <div className="card-header">نص الإتفاقية</div>
          <div className="card-body">
            <textarea
              className="form-control"
              rows="5"
              defaultValue="نص الإتفاقية هنا..."
            ></textarea>
          </div>
        </div>
  
        <div className="card mb-4" id="receipt-approval">
          <div className="card-header">اعتماد ايصال التحويل</div>
          <div className="card-body">
            <button className="btn btn-primary">اعتماد ايصال التحويل</button>
          </div>
        </div>
  
        <div className="card mb-4" id="general-settings">
          <div className="card-header">اعدادات عامة</div>
          <div className="card-body">
            <p>اعدادات عامة هنا...</p>
          </div>
        </div> */}
      </div>
      );
setbike(null)
setcustomers(null)
sethome(null)
setsitting(data)
setmassage('')
}
  return (
    <div className="d-flex">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse border p-3 col-3 " id="navbarSupportedContent" >
          <div className="sidebar bg-light vh-100 p-3 border d-md-block">
            <h2 className="text-center">Dashboard</h2>
            <ul className="nav flex-column">
              <li className="nav-item border rounded-pill mb-3 mt-3" onClick={handelhome}>
                <Link className="nav-link border rounded-pill">
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item border rounded-pill mb-3" onClick={handelcustomer}>
                <Link className="nav-link">
                  العملاء
                </Link>
              </li>
              <li className="nav-item border rounded-pill mb-3" onClick={handelbike}>
                <Link className="nav-link">
                  الدراجات النارية
                </Link>
              </li>
              <li className="nav-item border rounded-pill mb-3" onClick={handelsitting}>
                <Link className="nav-link">
                  اعدادات
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content flex-grow-1 p-3">
      <h1 className='mt-5 '>{massage}</h1>

        {home}
        {customers}
        {bike}
        {sitting}
      </div>
    </div>
  );
};


export default Dashboard;
