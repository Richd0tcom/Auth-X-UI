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
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin/>} >
      <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/maps" element={<Maps />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/tables" element={<Tables />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
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
