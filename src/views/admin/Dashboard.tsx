import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components

import CardPageVisits from '../../components/Cards/CardPageVisits';
import CardSocialTraffic from '../../components/Cards/CardSocialTraffic';
import HeaderStats from '../../components/Headers/HeaderStats';

export default function Dashboard() {
  const [isModalOPen, setIsModalOpen] = useState(false)

  
  const Modal = () => {
    if (!isModalOPen) return null
    return (
      <div className="fixed top-0 bottom-0 over left-0 right-0 z-[100000]">
      <section className='max-w-xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Register New App
        </h2>

        <form>
          <div className='flex  gap-6 mt-4 flex-col'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='username'
              >
                App Name
              </label>
              <input
                id='username'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='emailAddress'
              >
                Redirect_url
              </label>
              <input
                id='emailAddress'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div className='flex justify-between mt-6'>
          <div className='px-8 py-2.5 leading-5 text-red-400 ring-red-400 transition-colors duration-300 transform rounded-md  focus:outline-none cursor-pointer'
          onClick={()=> setIsModalOpen(false)}>
              Cancel
            </div>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' type="submit">
              Save
            </button>
          </div>
        </form>
      </section>
      </div>
    )
  }
  
  return (

    <>
      <div className='flex'>
        {/* <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'></div> */}
        <div className='w-full px-4'>
          <div className='flex justify-end mt-6 md:mt-24'>
            <button className='px-8 py-3 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex gap-2'
            onClick={()=>setIsModalOpen(true)}>
              <span className='text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </span>
              <span>New project</span>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-24 px-5'>
        {/* Header */}
        <div className='mt-12 space-y-8'>
          <div className='border-2 border-gray-100 rounded-lg dark:border-gray-700'>
            <button className='flex items-center justify-between w-full p-8'>
              <h1 className='font-semibold text-gray-700 dark:text-white'>
                How i can play for my appoinment ?
              </h1>

              <span className='text-gray-400 bg-gray-200 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M18 12H6'
                  />
                </svg>
              </span>
            </button>

            <hr className='border-gray-200 dark:border-gray-700' />

            <ul className='p-8 text-sm text-gray-500 dark:text-gray-300'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
              laboriosam recusandae facere dolorum veniam quia pariatur
              obcaecati illo ducimus?
            </ul>
          </div>

          <div className='border-2 border-gray-100 rounded-lg dark:border-gray-700'>
            <button className='flex items-center justify-between w-full p-8'>
              <h1 className='font-semibold text-gray-700 dark:text-white'>
                What can i expect at my first consultation?
              </h1>

              <span className='text-white bg-blue-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap mt-4'>
        <Outlet />
      </div>
      {/** modal */}
      <Modal />
      
    </>
  );
}
