import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import NavbarApp from './Components/Navbar';
import ArriveeInternationale from './Components/ArriveeInternationale';
import ArriveeNationale from './Components/ArriveeNationale';
import DepartNational from './Components/DepartNational';
import DepartInternational from './Components/DepartInertnational';
import Enregistrement from './Components/Enregistrement';
import HallPublique from './Components/HallPublique';
import Welcome from './Components/Welcome';
import LoginPage from './Components/LoginPage';


import { useAuth } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

  const [emailData, setEmailData] = useState({
    subject: 'Test',
    body: 'Salut Salut'
  });

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-email', emailData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };



  return (

    <div className="App">


      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path='/Enregistrement' element={<ProtectedRoute><Enregistrement></Enregistrement></ProtectedRoute>}></Route>
        <Route path='/HallPublique' element={<ProtectedRoute><HallPublique></HallPublique></ProtectedRoute>}></Route>
        <Route path='/DepartNational' element={<ProtectedRoute><DepartNational></DepartNational></ProtectedRoute>}></Route>
        <Route path='/DepartInternational' element={<ProtectedRoute><DepartInternational></DepartInternational></ProtectedRoute>}></Route>
        <Route path='/ArriveeNationale' element={<ProtectedRoute><ArriveeNationale></ArriveeNationale></ProtectedRoute>}></Route>
        <Route path='/ArriveeInternationale' element={<ProtectedRoute><ArriveeInternationale></ArriveeInternationale></ProtectedRoute>}></Route>
        <Route path="/welcome" element={<ProtectedRoute><Welcome></Welcome></ProtectedRoute>} />
        <Route path="*" element={<Navigate to='/login'></Navigate>}></Route>

      </Routes>


      {/* <FormulaireChecklist></FormulaireChecklist> */}


      {/* <div>
        <h3>Email Sender</h3>
        <button onClick={sendEmail}>Send State via Email</button>
      </div> */}

      {/* <Routes>
        <Route path='/Registre' element={<Registre></Registre>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/ProgrammeVols' element={<ProgrammeVols currentDay={currentDay} setCurrentDay={setCurrentDay} inProp={inProp} setInProp={setInProp}></ProgrammeVols>}></Route>
        <Route path='/' element={<Welcome></Welcome>}></Route>
      </Routes> */}

    </div>

  );
}

export default App;
