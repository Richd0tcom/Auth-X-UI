import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  RedirectFunction,
  Routes,
} from 'react-router-dom';

// layouts

import Admin from './layouts/Admin';
// import Auth from "./layouts/Auth.js";
import Auth from './layouts/Auth';

// views without layouts

import Landing from './views/Landing';
import Profile from './views/Profile';
import Dashboard from './views/admin/Dashboard';

import Settings from './views/admin/Settings';
import Tables from './views/admin/Tables';
import Register from './views/auth/Register';
import Login from './views/auth/Login';

import CardSettings from './components/Cards/CardSettings';
import CardProfile from './components/Cards/CardProfile';
import DevLanding from './views/DevLanding';

function DeveloperSettings() {
  return (
    <div className='w-full lg:w-8/12 px-4 mt-32'>
      <CardSettings />
    </div>
  );
}
function DeveloperProfile() {
  return (
    <div className='w-full  px-4 mt-32'>
      <CardProfile />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard/settings' element={<Settings />}>
            <Route
              path='edit'
              element={<DeveloperSettings />}
            />
            <Route
              path='profile'
              element={<DeveloperProfile />}
            />
          </Route>

          <Route path='dashboard/docs' element={<Tables />} />
        </Route>
        
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
       
        {/* add routes without layouts */}
        <Route path='/' element={<Landing />} />
        <Route path='/developer' element={<DevLanding />} />
        <Route path='/profile' element={<Profile />} />

        {/* add redirect for first page */}
        {/* <Redirect from="*" to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
