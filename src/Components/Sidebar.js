// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light vh-100 p-3 border" >
      <h2 className="text-center">Dashboard</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/12">
            الرئيسية
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/customers">
            العملاء
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/motorcycles">
            الدراجات النارية
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            اعدادات
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
