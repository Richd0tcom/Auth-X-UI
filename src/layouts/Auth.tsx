import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";

// views

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";


// const xhiuoeu = require("assets/img/register_bg_2.png")

export default function Auth() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //   navigate("login")
  // },[])
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          {/* <div
            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url("../assets/img/register_bg_2.png")`,
            }}
          ></div>
          <Outlet /> */}
        </section>
      </main>
    </>
  );
}
