import React from 'react'
import { Link } from 'react-router-dom'
import './Firstpage.css'
export default function Fourpage() {
  return (
    <div>
        <div className="iphone-border d-flex justify-content-center align-items-center vh-100 mb-5">
          <div className="p-3 w-80 h-100 d-flex flex-column align-items-center border pt-5">
            <p className="text-end text-Primary fs-4 mb-5">
            نحتـــاج رقم جوالــك
            </p>
            <input
              type="text"
              placeholder="ادخل رقم جوالك"
              className="form-control mb-2"
            ></input>
            <div className="">      
              <Link to="/4" className="btn btn-dark">
                التالي
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
