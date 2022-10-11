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
				<svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842 168" role="img">
				    {/* <style>.st3{fill:#2a3b47}.st1{fill:#1292ee}</style> */}
				    <path className="st3" d="M232 31.5l-.3.1v44.7h-42.4V31.6l-.3-.1c-6.3-1.3-12.5-1.3-18.7 0l-.3.1v102.8l.3.1c3.1.6 6.2 1 9.3 1s6.2-.3 9.4-1l.3-.1V92.7h42.4v41.7l.3.1c6.2 1.3 12.5 1.3 18.7 0l.3-.1V31.6l-.3-.1c-6.3-1.2-12.5-1.2-18.7 0zM297.7 60.4c-22.2 0-35.4 14-35.4 37.5 0 12.2 2.8 21.9 8.4 28.6 6.1 7.3 15.2 11 27.3 11 20.5 0 31-12.2 32.3-24.3v-.3l-.3-.1c-5.2-1.7-10-2.1-15.7-1.3h-.2v.2c-1.2 7.2-7.2 11.5-15.9 11.5-12.2 0-18.2-6.7-18.4-20.5h51.6v-.3c1.5-13.6-1.2-24.6-7.8-32.1-6.1-6.4-15-9.9-25.9-9.9zm-.2 13.3c5.1 0 9.4 1.6 12.3 4.7 3 3.2 4.5 8 4.2 13.7h-34.2c.3-11.7 6.8-18.4 17.7-18.4zM343.9 31.5l-.3.1v102.8l.3.1c2.9.6 5.8 1 8.8 1 2.9 0 5.9-.3 8.8-1l.3-.1V31.6l-.3-.1c-5.8-1.3-11.7-1.2-17.6 0zM412.4 60.4c-7.7 0-15.8 3-23.5 8.7l-1.1-5.4-.2-.1c-4.4-1.3-8-1.3-12.3 0l-.2.1V166l.3.1c2.9.6 5.8 1 8.8 1s5.9-.3 8.8-1l.3-.1v-34.2c6.1 3.9 12.6 5.7 19.9 5.7 20.2 0 32.3-14.3 32.3-38.4-.1-24.5-12.1-38.7-33.1-38.7zM393 80.7c5.4-3.7 10.4-5.4 15.8-5.4 12.3 0 19 8.5 19 24.1 0 15.3-6.6 23.4-19.2 23.4-5.4 0-10.5-1.7-15.6-5.3V80.7zM522.6 79.1c-3.1-1.2-5.9-2.2-8.6-3.1-14-5-22.4-8-22.6-15.6-.1-3.5 1-6.5 3.4-9 3.5-3.6 9.4-5.5 16.6-5.5 7.1 0 12.6 1.9 15.9 5.4 2.8 3 4 7.1 3.7 12.2v.3l.3.1c6.1 1.2 12.2 1.1 18.8-.4l.3-.1v-.3c.4-8.6-2.2-16.1-7.5-21.7-6.6-7-17.2-10.7-30.6-10.8h-.4c-24.9 0-39.9 11.1-40.1 29.7-.1 18.5 16.9 24.7 27.1 28.3l1.5.6c3.4 1.2 6.6 2.3 9.4 3.3 13.8 4.8 22.1 7.7 22.4 15 .1 3.8-1 6.9-3.3 9.3-3.3 3.4-9.1 5.1-16.8 5-8.5 0-15-2.2-18.7-6.2-2.7-3-3.8-6.8-3.4-11.4v-.3l-.3-.1c-6.2-1.2-12.5-1.1-18.7.3l-.2.1v.3c-.5 8.3 2 15.7 7.4 21.4 7.2 7.7 19 11.7 34.2 11.6 14.9 0 39.4-4 39.6-30-.3-17.3-15.1-22.9-29.4-28.4zM596.7 75.3c12.3 0 15.2 8 15.8 12.7v.3h.3c5.7.9 11.1.5 16.3-1l.3-.1v-.3c-.5-7.2-3.6-13.7-8.7-18.4-5.8-5.3-14.1-8.2-23.9-8.2-23.4 0-36.3 13.7-36.3 38.6 0 24.8 12.8 38.5 36 38.5 10 0 18.4-2.9 24.3-8.4 4.9-4.6 7.9-10.8 8.5-17.5v-.3l-.3-.1c-4.9-1.7-10.3-2-16.2-1h-.2v.2c-1.6 11.2-12.5 12-15.8 12-12.6 0-18.5-7.5-18.5-23.6-.1-15.9 5.8-23.4 18.4-23.4zM673.7 60.4c-23 0-35.7 13.7-35.7 38.6 0 24.8 12.7 38.5 35.7 38.5 23 0 35.7-13.7 35.7-38.5 0-24.9-12.7-38.6-35.7-38.6zM692 99.1c0 15.9-6 23.6-18.3 23.6s-18.3-7.7-18.3-23.6c0-16.2 5.8-23.8 18.3-23.8 12.3 0 18.3 7.8 18.3 23.8zM767 63.7l-.3.1V115c-5.8 5-11.1 7.2-17.2 7.2-8.6 0-12.3-4.9-12.3-16.5v-42l-.3-.1c-5.8-1.4-11.7-1.4-17.6 0l-.3.1v46.1c0 17.5 9.4 27.6 25.9 27.6 8.8 0 16.5-3.4 24.8-11l1.7 8 .2.1c4.2 1.1 8.6 1.1 12.8 0l.3-.1V63.7l-.3-.1c-5.6-1.4-11.5-1.4-17.4.1zM840.1 120.7l-.1-.3-.3.1c-7 1.6-11.1 1.5-13.5-.4-2-1.6-2.9-4.4-2.9-8.8V78.5h14.2l.1-.3c1-4.8 1-9.7 0-14.6l-.1-.3h-14.2V43.9l-.3-.1c-5.8-1.3-11.7-1.3-17.5 0l-.3.1.1 19.4h-9l-.1.3c-1.1 4.8-1.1 9.8 0 14.6l.1.3h9l.1 31.5c0 8.8.5 17.7 6.6 22.8 3.3 2.7 8.1 4.1 14.3 4.1 3.8 0 8.2-.5 13.3-1.5h.2l.1-.2c1.4-4.7 1.5-9.6.2-14.5z"/>
				    <path className="st1" d="M10.9 97.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L11.2 48.6C4.9 54.8 1 63.5 1 73c0 9.5 3.8 18 9.9 24.2zM128.6 68.8L80 117.4c-6.3 6.2-10.2 14.9-10.2 24.4 0 9.4 3.8 18 9.9 24.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.5-3.8-18-9.9-24.2zM128.3 48.7c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L11.2 117.4C4.9 123.7 1 132.3 1 141.9c0 9.4 3.8 18 9.9 24.2L128.3 48.7z"/>
				</svg>
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
				<a href="#" className="flex items-center ml-8 text-sm text-gray-700 font-light hover:text-gray-900">Pricing</a>
			</div>
			<div>
				<a href="#" className="text-sm text-gray-700 font-light hover:text-gray-900">Log in</a>
				<a href="#" className="ml-4 px-4 py-3 text-sm text-white font-light bg-blue-500 rounded hover:bg-blue-400">Free Trial</a>
			</div>
		</div>
	</nav>
      <main>
        <div className="flex pt-32 px-6 md:pt-0 lg:pt-12 items-center justify-center bg-hero md:h-screen overflow-hidden">
          <div className="flex flex-col md:flex-row items-center max-w-8xl">
            <div className="w-full md:w-1/2 lg:pr-32">
              <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
                There’s a better way to talk with your customers.
              </h2>
              <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                Help Scout is designed with your customers in mind. Provide
                email and live chat with a personal touch, and deliver help
                content right where your customers need it, all in one place,
                all for one low price.
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
        <div className="mt-24 p-6">
          <div className="w-full py-8">
            <h3 className="w-full lg:w-1/3 m-auto text-center text-2xl md:text-3xl text-blue-900">
              Help Scout empowers customer-centric businesses with tools that
              make every interaction more human and helpful.
            </h3>
            <hr className="my-8 border-blue-900 w-1/12 mx-auto" />
          </div>
          <div className="flex flex-col-reverse md:flex-row m-auto max-w-8xl items-center justify-center">
            <div className="w-full md:w-2/3">
              <img src="../assets/img/1.png" />
            </div>
            <div className="mt-6 md:mt-0 w-full md:w-1/3">
              <p className="text-2xl text-gray-500 font-light">Messaging</p>
              <p className="mt-4 text-3xl text-blue-900">
                Look and feel matters
              </p>
              <p className="py-6 text-gray-600">
                Replace robo-emails and ticket numbers with emails that were
                clearly sent by a real person. Fast, friendly, and above all,
                customer-first.
              </p>
              <a className="mt-4 text-blue-500" href="#">
                More about the help desk
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-32 flex flex-col md:flex-row m-auto max-w-8xl items-top justify-center">
            <div className="w-full md:w-1/3">
              <div>
                <p className="text-2xl text-gray-500 font-light">Docs</p>
                <p className="mt-4 text-3xl text-blue-900">
                  Make impressive help docs in minutes
                </p>
                <p className="py-6 text-gray-600">
                  Anyone on your team can build out articles that answer common
                  customer questions. Make Docs public or private—it’s all in
                  your control.
                </p>
                <a className="mt-4 text-blue-500" href="#">
                  More about Docs &gt;
                </a>
              </div>
              <div className="hidden md:block w-2/3 mt-20">
                <img className="" src="../assets/img/3.jpg" />
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:ml-12 relative w-full md:w-2/3 px-8 pb-24">
              <img
                className="absolute bottom-0 left-0 h-64 z-0"
                src="../assets/img/dots.jpg"
              />
              <img
                className="relative z-20 shadow md:mx-10"
                src="../assets/img/2.png"
              />
            </div>
          </div>

          <div className="mt-12 md:mt-32 flex flex-col-reverse md:flex-row m-auto max-w-8xl items-top justify-center">
            <div className="mt-12 md:mt-0 md:mr-12 relative w-full md:w-2/3 md:pb-24">
              <img
                className="relative shadow"
                src="../assets/img/graph.jpg"
              />
            </div>
            <div className="w-full md:w-1/3">
              <div>
                <p className="text-2xl text-gray-500 font-light">Reporting</p>
                <p className="mt-4 text-3xl text-blue-900">
                  Look smarter in meetings
                </p>
                <p className="py-6 text-gray-600">
                  Intuitive, built-in reports make for valuable “aha” moments
                  with your team and your boss. No coding or customizations
                  required.
                </p>
                <a className="mt-4 text-blue-500" href="#">
                  More about Reporting &gt;
                </a>
              </div>
              <div className="hidden lg:block w-2/3 mt-20 mx-auto">
                <img className="h-48" src="../assets/img/bag.png" />
              </div>
            </div>
          </div>
          <div className="mt-12 mx-auto w-full lg:w-2/5 text-center">
            <p className="text-xl text-gray-600 font-light">Integrations</p>
            <p className="mt-4 text-3xl text-blue-900 font-semibold">
              Connect Help Scout with all the things
            </p>
            <p className="py-6 text-gray-600">
              Explore 50+ integrations that make your day-to-day workflow more
              efficient and familiar. Our extensive developer tools might also
              strike your fan
            </p>
          </div>

          <div className="mt-6 flex flex-wrap max-w-8xl px-8 justify-end m-auto">
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                <img className="" src="../assets/img/slack.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                <p className="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-indigo-300">
                  plus
                </p>
                <img className="" src="../assets/img/hubspot.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                <img className="" src="../assets/img/mailchimp.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                <p className="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-indigo-300">
                  plus
                </p>
                <img className="" src="../assets/img/salesforce.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                <img className="" src="../assets/img/woocommerce.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                <p className="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-indigo-300">
                  plus
                </p>
                <img className="" src="../assets/img/jira.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                <img className="" src="../assets/img/shopify.png" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
              <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                <p className="text-sm text-blue-500">View all integrations</p>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-8xl mx-auto">
            <div className="w-full md:w-1/2 p-4">
              <div className="shadow-lg rounded overflow-hidden">
                <img className="" src="../assets/img/customer.png" />
                <div className="bg-white p-12">
                  <p className="font-light text-xl italic font-gray-800">
                    "I'm not sure how I would be able to do support - at Zapier
                    or anywhere else - without Help Scout."
                  </p>
                  <p className="mt-4 font-light text-sm text-gray-500">
                    Hoon, Customer Support Pro
                  </p>
                  <p className="mt-1 font-semibold text-sm text-gray-900">
                    Zapier
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full md:w-1/2 p-2">
              <div className="flex flex-col justify-between w-full md:w-3/5">
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-center md:text-left text-blue-900 font-semibold text-3xl">
                    Trusted by more than 9,000 businesses in 140 countries.
                  </h3>
                  <button className="mt-4 rounded border-2 border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">
                    Meet out customers
                  </button>
                </div>
                <div className="mt-6 md:mt-12 flex flex-wrap">
                  <img
                    className="w-1/3 py-2"
                    src="../assets/img/customer-logos/grubhub.png"
                  />
                  <img
                    className="w-1/3 py-2"
                    src="../assets/img/customer-logos/trello.png"
                  />
                  <img
                    className="w-1/3 py-2"
                    src="../assets/img/customer-logos/pocket.png"
                  />
                  <img
                    className="w-1/3 py-2"
                    src="../assets/img/customer-logos/buffer.png"
                  />
                  <img
                    className="w-1/3 py-2"
                    src="../assets/img/customer-logos/tuftandneedle.png"
                  />
                  <img
                    className="w-1/3 py-2"
                    src="../assets/img/customer-logos/tradesy.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 mt-12 md:mt-24 flex justify-center w-full bg-hero">
          <div className="flex flex-col items-center w-full max-w-8xl">
            <div className="flex flex-col justify-center">
              <h3 className="text-blue-900 font-semibold text-center text-3xl">
                Our people make the difference.
              </h3>
              <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
                We’re an extension of your customer service team, and all of our
                resources are free
              </p>
            </div>
            <div className="mt-12 flex flex-col lg:flex-row w-full">
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center">
                  <div className="h-32 w-32 p-4">
                    <img src="../assets/img/trophy.jpg" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg text-blue-500">
                      World className 24x6 Support
                    </p>
                    <p className="mt-4 text-gray-500">
                      These friendly and knowledgeable folks are available via
                      email and chat.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-32 w-32 p-4">
                    <img src="../assets/img/laptop.jpg" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg text-blue-500">
                      Training & classNamees
                    </p>
                    <p className="mt-4 text-gray-500">
                      Weekly resources designed to help you get the most out of
                      Help Scout.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-32 w-32 p-4">
                    <img src="../assets/img/books.jpg" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg text-blue-500">
                      Education from HelpU
                    </p>
                    <p className="mt-4 text-gray-500">
                      We’ll teach your team how to master the craft of customer
                      service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 flex justify-center lg:justify-end">
                <img src="../assets/img/people.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-32 lg:mt-12 w-full lg:w-2/5 m-auto flex flex-col items-center bg-white p-10">
          <h3 className="text-blue-900 font-semibold text-center text-3xl">
            Get started with Help Scout
          </h3>
          <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
            A better experience for your customers, fewer headaches for your
            team.
            <br />
            You'll be set up in minutes.
          </p>
          <div className="mt-6 flex flex-col md:flex-row w-full md:px-8">
            <input
              className="flex flex-grow px-4 py-2 rounded text-gray-500 border border-gray-500"
              placeholder="Email Address"
            />
            <button className="mt-2 md:mt-0 md:ml-2 bg-blue-500 shadow-lg rounded text-white px-4 py-3">
              Get Started
            </button>
          </div>
          <p className="mt-6 text-gray-500">
            See Help Scout in action.
            <a className="ml-2 text-blue-500" href="#">
              Get a Demo
            </a>
          </p>
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
