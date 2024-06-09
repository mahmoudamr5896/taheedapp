import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Firstpage from './Pages/Firstpage';
import Secondpage from './Pages/Secondpage';
import thirdpage from './Pages/Thirdpage';
import Fourpage from './Pages/Fourpage';
import Fivepage from './Pages/Fivepage';
import Sixpage from './Pages/Sixpage';
import Eightpage from './Pages/Eightpage';
import Sevenpage from './Pages/Sevenpage';
import Ninepage from './Pages/Ninepage';
import PaymentInfo from './Components/Payment';
import Thanks from './Components/Thanks';

function App() {
  return (
    <div className="App">
   
    <Router>
       <Routes>
         <Route path="/" Component={Firstpage} />
         <Route path="/1" Component={Secondpage} />
         <Route path="/2" Component={thirdpage}/>
         <Route path="/3" Component={Fourpage}/>
         <Route path="/4" Component={Fivepage}/>
         <Route path="/5" Component={Sixpage}/>
         <Route path="/6" Component={Sevenpage}/>
         <Route path="/7" Component={Eightpage}/>
         <Route path="/8" Component={Ninepage}/>
         <Route path="/9" Component={PaymentInfo}/>
         <Route path="/10" Component={Thanks}/>
       </Routes>
     </Router>
     </div>
  );
}

export default App;
