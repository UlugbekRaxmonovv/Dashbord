import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Hotels from './pages/Hotels/Hotels.jsx';
import Users from './pages/Users/Users.jsx';
import Restaurant from './pages/Restaurants/Restaurants.jsx';
import Attractions from './pages/Attractions/Attractions.jsx';
import Admins from './pages/Admins/Admins.jsx';
import Settings from './pages/Settings/Settings.jsx';
import Home from './pages/Home/Home.jsx'; 
import Login from './pages/Login/Login.jsx';
import Auth from './pages/Auth/Auth.jsx';
import DeletUser from './pages/DeletUser/DeletUser.jsx';
import AnimatedCursor from 'react-animated-cursor';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ForgetPassword from './component/ForgetPassword/ForgetPassword.jsx';
function App() {
  return (
    <>
    <div className="App">
      {/* <AnimatedCursor
      color='255, 169, 9'
      /> */}
      <ToastContainer/>
    </div>

    
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />}/>
          <Route path="/" element={<Auth />}> 
          <Route path="home" element={<Home />}/>
          <Route path="users" element={<Users />}/>
          <Route path="hotels" element={<Hotels />} />
          <Route path="restaurants" element={<Restaurant />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="admins" element={<Admins />} />
          <Route path="settings" element={<Settings />} />
          <Route path="deletUser" element={<DeletUser />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
