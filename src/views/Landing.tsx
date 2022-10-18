import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar";
import Footer from "../components/Footers/Footer";

import Team1 from "../assets/img/team-1-800x800.jpg";
import Team2 from "../assets/img/team-2-800x800.jpg";
import Team3 from "../assets/img/team-3-800x800.jpg";
import Team4 from "../assets/img/team-4-470x470.png";

export default function Landing() {
  return (
    <>
      	<nav className="px-6 fixed w-full top-0 right-0 bg-hero flex items-center justify-center py-6 z-40">
		<div className="flex justify-between items-center max-w-8xl w-full">
			<div className="cursor-pointer">
				<h1 className="text-5xl font-bold">AuthX</h1>
			</div>
			<div className="hidden lg:flex flex-grow">
				<a href="#" className="flex items-center ml-8 text-sm text-gray-700 font-light hover:text-gray-900">Product
						<svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
						<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
							<g id="icon-shape">
								<polygon id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon></g>
						</g>
						</svg>
				</a>
				<a href="#" className="flex items-center ml-8 text-sm text-gray-700 font-light hover:text-gray-900">Resources
						<svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
						<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
							<g id="icon-shape">
								<polygon id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon></g>
						</g>
						</svg>
				</a>
				<a href="#" className="flex items-center ml-8 text-sm text-gray-700 font-light hover:text-gray-900">Education
						<svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
						<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
							<g id="icon-shape">
								<polygon id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon></g>
						</g>
						</svg>
				</a>
        <Link to="">
          <a className="flex items-center ml-8 text-sm text-gray-700 font-light hover:text-gray-900">Pricing</a>
        </Link>
				
			</div>
			<div>
				<a href="#" className="text-sm text-gray-700 font-light hover:text-gray-900">Log in</a>
				<a href="#" className="ml-4 px-4 py-3 text-sm text-white font-light bg-blue-500 rounded hover:bg-blue-400">Sign up</a>
			</div>
		</div>
	</nav>
      <main>
        <div className="flex pt-32 px-6 md:pt-0 lg:pt-12 items-center justify-center bg-hero md:h-screen overflow-hidden">
          <div className="flex flex-col md:flex-row items-center max-w-8xl">
            <div className="w-full md:w-1/2 lg:pr-32">
              <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
                There’s an easier way to handle Authentication.
              </h2>
              <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                AuthX is designed with users and project owners in mind in mind. Provides
                customers an easier way to access your product. For free o.
              </h3>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
                  Get started
                </button>
                <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                  Watch a Demo
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img src="../assets/img/banner.png"/>
            </div>
          </div>
        </div>
       
        <div className="flex justify-center">
          <div className="flex justify-end w-full max-w-8xl">
            <img className="-mb-4" src="../assets/img/reading.png" />
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
}
