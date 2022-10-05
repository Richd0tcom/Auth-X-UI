import React from "react";
import { Routes, Route, redirect } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";

// views

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

// const xhiuoeu = require("assets/img/register_bg_2.png").default

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url(" + +")",
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            {/* <Redirect from="/auth" to="/auth/login" /> */}
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
