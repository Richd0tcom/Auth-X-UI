import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import GithubIcon from "../../assets/img/github.svg";
import GoogleIcon from "../../assets/img/google.svg";

export default function DeveloperRegister() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //   navigate("register")
  // })
  return (
    
    <>
    <main>
    <section className="relative w-full h-full py-20 min-h-screen bg-slate-100">
    <div className='px-8'>
      
        <form className='max-w-2xl mx-auto pt-12 px-8 bg-white rounded-lg mt-5 pb-16 shadow-lg '>
          <h1 className='mb-8 text-2xl'>Register</h1>
          <div className='mb-6'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your name
            </label>
            <input
              type='text'
              id='name'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Big Sur'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your Email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              required
            />
          </div>
          <div className='flex items-start mb-6'>
            
            <label
              htmlFor='terms'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Already have an account?{' '}
              <a
                href='#'
                className='text-blue-600 hover:underline dark:text-blue-500'
              >
                Sign in instead.
              </a>
            </label>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Register new account
          </button>
        </form>
      </div>
    </section>
    </main>
      
    </>
  );
}
