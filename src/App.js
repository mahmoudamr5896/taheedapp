import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import CustomerDetails from './Components/Customerdetail';
import ImageUpload from './Components/Img';
function App() {
  return (
    <div className="App">
   
    <Router>
       <Routes>
         <Route path="/" Component={Home} />
         <Route path="/dash" Component={Dashboard} />
         <Route path="/:id" Component={CustomerDetails} />
         <Route path="/1" Component={ImageUpload} />
         {/* 
         <Route path="/2" Component={thirdpage}/>
         <Route path="/3" Component={Fourpage}/>
         <Route path="/4" Component={Fivepage}/>
         <Route path="/5" Component={Sixpage}/>
         <Route path="/6" Component={Sevenpage}/>
         <Route path="/7" Component={Eightpage}/>
         <Route path="/8" Component={Ninepage}/>
         <Route path="/9" Component={PaymentInfo}/>
         <Route path="/10" Component={Thanks}/> */}
       </Routes>
     </Router>
     </div>
  );
}

export default App;
