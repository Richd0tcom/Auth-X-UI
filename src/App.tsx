import { useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, RedirectFunction, Routes } from "react-router-dom";


// layouts

import Admin from "./layouts/Admin";
// import Auth from "./layouts/Auth.js";
import Auth from "./layouts/Auth"

// views without layouts

import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Dashboard from "./views/admin/Dashboard";
import Maps from "./views/admin/Maps";
import Settings from "./views/admin/Settings";
import Tables from "./views/admin/Tables";
import Register from './views/auth/Register';
import Login from './views/auth/Login';

import CardSettings from "./components/Cards/CardSettings";
import CardProfile from "./components/Cards/CardProfile";

function DeveloperSettings(){
  return (
    <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
    </div>
  )
}
function DeveloperProfile(){
  return (
    <div className="w-full  px-4">
          <CardProfile />
    </div>
  )
}

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin/>} >
      <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/dashboard/maps" element={<Maps />} />
            <Route path="/admin/dashboard/settings" element={<Settings />} >
                <Route path="/admin/dashboard/settings/edit" element={<DeveloperSettings/>}/>
                <Route path="/admin/dashboard/settings/profile" element={<DeveloperProfile/>}/>
            </Route>
            <Route path="/admin/dashboard/tables" element={<Tables />} />
      </Route>
      <Route path="/auth" element={<Auth />} >
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
      </Route>
      {/* add routes without layouts */}
      <Route path="/"  element={<Landing />} />
      <Route path="/profile"  element={<Profile />} />

      
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}

    </Routes>
  </BrowserRouter>
  )
}

export default App
