import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Formulaire from './Components/Formulaire';
import Welcome from './Components/Welcome';
import LoginPage from './Components/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Dashbord';

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
        <Route path='/Enregistrement' element={<ProtectedRoute><Formulaire /></ProtectedRoute>} />
        <Route path='/HallPublique' element={<ProtectedRoute><Formulaire /></ProtectedRoute>} />
        <Route path='/DepartNational' element={<ProtectedRoute><Formulaire /></ProtectedRoute>} />
        <Route path='/DepartInternational' element={<ProtectedRoute><Formulaire /></ProtectedRoute>} />
        <Route path='/ArriveeNationale' element={<ProtectedRoute><Formulaire /></ProtectedRoute>} />
        <Route path='/ArriveeInternationale' element={<ProtectedRoute><Formulaire /></ProtectedRoute>} />
        <Route path="/welcome" element={<ProtectedRoute><Welcome></Welcome></ProtectedRoute>} />
        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>} />      
        <Route path="*" element={<Navigate to='/login'></Navigate>} />

      </Routes>



    </div>

  );
}

export default App;
