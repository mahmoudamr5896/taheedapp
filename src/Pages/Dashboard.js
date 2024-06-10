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
  
useEffect(() => {
  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  fetchUsers();
}, []);
    // const[home,sethome]=useState(null)
   const  handelhome=()=>{
    const data = (
        <div className="container">
        <h2 className="text-center mb-4">الرئيسية</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <h5 className="card-title">عدد العملاء المسجلين</h5>
                <p className="card-text">890</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">عدد العملاء الذين اشتروا</h5>
                <p className="card-text">118</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-info h-100">
              <div className="card-body">
                <h5 className="card-title">عدد الدراجات النارية</h5>
                <p className="card-text">590</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-body">
                <h5 className="card-title">إجمالي قيمة الدراجات النارية</h5>
                <p className="card-text">3,510,500</p>
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
    }
   const handelcustomer = ()=>{
    const customers = [
        { name: 'محمد احمد عبدالله', steps: 'مكتمل', bikes: 3, date: '28-09-2023' },
        { name: 'احمد موسى ياسين', steps: 'الأولى', bikes: '-', date: '28-09-2023' },
        { name: 'يزن عبدالله الحربي', steps: 'الرابعة', bikes: '-', date: '28-09-2023' },
    ]    
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
                <Link to={`/customer/${index}`}>{customer.fullName}</Link>
              </td>
              <td>{customer.isVerified}</td>
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
   }
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
                <p className="card-text">118</p>
              </div>
            </div>
          </div>
        </div>


)
setbike(data)
setcustomers(null)
sethome(null)
setsitting(null)
}

  
const handelsitting =()=>{

      const data =  (
        <div className="container mt-5">
          <h2 className="text-center mb-4">اعدادات</h2>
    
          <div className="card mb-4">
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
                      {user.isVerified ===true ?
                    ( <td> نعم </td>
                               ):(
                                <td> لا</td>
                               )
                        }
                      <td>
                        <button className="btn btn-danger">حذف المستخدم</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    
          <div className="card mb-4">
            <div className="card-header">نص الإتفاقية</div>
            <div className="card-body">
              <textarea className="form-control" rows="5" defaultValue="نص الإتفاقية هنا..."></textarea>
            </div>
          </div>
    
          <div className="card mb-4">
            <div className="card-header">اعتماد ايصال التحويل</div>
            <div className="card-body">
              <button className="btn btn-primary">اعتماد ايصال التحويل</button>
            </div>
          </div>
    
          <div className="card mb-4">
            <div className="card-header">اعدادات عامة</div>
            <div className="card-body">
              <p>اعدادات عامة هنا...</p>
            </div>
          </div>
        </div>
      );
setbike(null)
setcustomers(null)
sethome(null)
setsitting(data)
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        {home}
        {customers}
        {bike}
        {sitting}
      </div>
    </div>
  );
};


export default Dashboard;
