import React, { useState } from 'react';

const DevLanding = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div>
      <section
        className='fixed w-full px-8 text-gray-700 z-50 bg-white body-font shadow'
        data-tails-scripts='//unpkg.com/alpinejs'
      >
        <div className='relative container flex flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
          <a
            href='#_'
            className=' z-10 flex items-center w-auto text-5xl font-extrabold leading-none text-black select-none'
          >
            AuthX
          </a>

          <section className='MOBILE-MENU flex lg:hidden'>
            <div
              className='HAMBURGER-ICON space-y-2'
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className='block h-1 w-8 animate-pulse bg-gray-600'></span>
              <span className='block h-1 w-8 animate-pulse bg-gray-600'></span>
              <span className='block h-1 w-8 animate-pulse bg-gray-600'></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav border rounded-sm' : 'hideMenuNav'}>
              <div
                className='CROSS-ICON absolute top-0 right-0 pl-5 py-5 pr-0'
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className='h-8 w-8 text-gray-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </div>
              <ul className='NAVIGATION-MOBILE-OPEN flex flex-col space-y-5 pb-8 border-black items-start justify-between min-h-[250px]'>
                <a
                  href='#_'
                  className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
                  x-data='{ hover: false }'
                >
                  {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
                  <span className='block'>Home</span>
                  <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                    <span
                      x-show='hover'
                      className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                      x-transitionEnter='transition ease duration-200'
                      x-transitionEnter-start='scale-0'
                      x-transitionEnter-end='scale-100'
                      x-transitionLeave='transition ease-out duration-300'
                      x-transitionLeave-start='scale-100'
                      x-transitionLeave-end='scale-0'
                    ></span>
                  </span>
                </a>
                <a
                  href='#_'
                  className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
                  x-data='{ hover: false }'
                >
                  {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
                  <span className='block'>Features</span>
                  <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                    <span
                      x-show='hover'
                      className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                      x-transitionEnter='transition ease duration-200'
                      x-transitionEnter-start='scale-0'
                      x-transitionEnter-end='scale-100'
                      x-transitionLeave='transition ease-out duration-300'
                      x-transitionLeave-start='scale-100'
                      x-transitionLeave-end='scale-0'
                    ></span>
                  </span>
                </a>
                <a
                  href='#_'
                  className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
                  x-data='{ hover: false }'
                >
                  {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
                  <span className='block'>Pricing</span>
                  <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                    <span
                      x-show='hover'
                      className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                      x-transitionEnter='transition ease duration-200'
                      x-transitionEnter-start='scale-0'
                      x-transitionEnter-end='scale-100'
                      x-transitionLeave='transition ease-out duration-300'
                      x-transitionLeave-start='scale-100'
                      x-transitionLeave-end='scale-0'
                    ></span>
                  </span>
                </a>
                <a
                  href='#_'
                  className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
                  x-data='{ hover: false }'
                >
                  {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
                  <span className='block'>Blog</span>
                  <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                    <span
                      x-show='hover'
                      className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                      x-transitionEnter='transition ease duration-200'
                      x-transitionEnter-start='scale-0'
                      x-transitionEnter-end='scale-100'
                      x-transitionLeave='transition ease-out duration-300'
                      x-transitionLeave-start='scale-100'
                      x-transitionLeave-end='scale-0'
                    ></span>
                  </span>
                </a>
                <div className='relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'
              data-rounded='rounded-md'
            >
              Sign in
            </a>
            <span className='inline-flex rounded-md shadow-sm'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                data-rounded='rounded-md'
                data-primary='blue-600'
              >
                Sign up
              </a>
            </span>
          </div>
              </ul>
            </div>
          </section>
          <nav className='hidden top-0 left-0 z-0 md:flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute'>
            <a
              href='#_'
              className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
              x-data='{ hover: false }'
            >
              {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
              <span className='block'>Home</span>
              <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                <span
                  x-show='hover'
                  className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                  x-transitionEnter='transition ease duration-200'
                  x-transitionEnter-start='scale-0'
                  x-transitionEnter-end='scale-100'
                  x-transitionLeave='transition ease-out duration-300'
                  x-transitionLeave-start='scale-100'
                  x-transitionLeave-end='scale-0'
                ></span>
              </span>
            </a>
            <a
              href='#_'
              className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
              x-data='{ hover: false }'
            >
              {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
              <span className='block'>Features</span>
              <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                <span
                  x-show='hover'
                  className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                  x-transitionEnter='transition ease duration-200'
                  x-transitionEnter-start='scale-0'
                  x-transitionEnter-end='scale-100'
                  x-transitionLeave='transition ease-out duration-300'
                  x-transitionLeave-start='scale-100'
                  x-transitionLeave-end='scale-0'
                ></span>
              </span>
            </a>
            <a
              href='#_'
              className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
              x-data='{ hover: false }'
            >
              {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
              <span className='block'>Pricing</span>
              <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                <span
                  x-show='hover'
                  className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                  x-transitionEnter='transition ease duration-200'
                  x-transitionEnter-start='scale-0'
                  x-transitionEnter-end='scale-100'
                  x-transitionLeave='transition ease-out duration-300'
                  x-transitionLeave-start='scale-100'
                  x-transitionLeave-end='scale-0'
                ></span>
              </span>
            </a>
            <a
              href='#_'
              className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
              x-data='{ hover: false }'
            >
              {/* @mouseenter="hover = true" @mouseleave="hover = false" */}
              <span className='block'>Blog</span>
              <span className='absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden'>
                <span
                  x-show='hover'
                  className='absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900'
                  x-transitionEnter='transition ease duration-200'
                  x-transitionEnter-start='scale-0'
                  x-transitionEnter-end='scale-100'
                  x-transitionLeave='transition ease-out duration-300'
                  x-transitionLeave-start='scale-100'
                  x-transitionLeave-end='scale-0'
                ></span>
              </span>
            </a>
          </nav>

          <div className='hidden relative z-10 md:inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'
              data-rounded='rounded-md'
            >
              Sign in
            </a>
            <span className='inline-flex rounded-md shadow-sm'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                data-rounded='rounded-md'
                data-primary='blue-600'
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </section>
      <section className='px-2 py-32 bg-white md:px-0 md:py-44'>
        <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div className='flex flex-wrap items-center sm:-mx-3'>
            <div className='w-full md:w-1/2 md:px-3'>
              <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                  <span className='block xl:inline'>Move Faster and </span>
                  <span
                    className='block text-indigo-600 xl:inline'
                    data-primary='indigo-600'
                  >
                    Secure your Apps!
                  </span>
                </h1>
                <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                  It's never been easier to add authentication to your websites
                  and ship your projects.
                </p>
                <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                  <a
                    href='#_'
                    className='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto'
                    data-primary='indigo-600'
                    data-rounded='rounded-md'
                  >
                    Try It Free
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 ml-1 feather feather-arrow-right'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </a>
                  <a
                    href='#_'
                    className='flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'
                    data-rounded='rounded-md'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div
                className='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'
                data-rounded='rounded-xl'
                data-rounded-max='rounded-full'
              >
                <img src='https://cdn.devdojo.com/images/november2020/hero-image.jpeg' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gray-50'>
        <div className='container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16'>
          <div className='flex flex-wrap items-center -mx-3'>
            <div className='order-1 w-full px-3 lg:w-1/2 lg:order-0'>
              <div className='w-full lg:max-w-md'>
                <h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading'>
                  Jam-packed with all the tools you need to succeed!
                </h2>
                <p className='mb-4 font-medium tracking-tight text-gray-400 xl:mb-6'>
                  It's never been easier to build a business of your own. Our
                  tools will help you with the following:
                </p>
                <ul>
                  <li className='flex items-center py-2 space-x-4 xl:py-3'>
                    <svg
                      className='w-8 h-8 text-pink-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                      ></path>
                    </svg>
                    <span className='font-medium text-gray-500'>
                      Faster Processing and Delivery
                    </span>
                  </li>
                  <li className='flex items-center py-2 space-x-4 xl:py-3'>
                    <svg
                      className='w-8 h-8 text-yellow-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                      ></path>
                    </svg>
                    <span className='font-medium text-gray-500'>
                      Out of the Box Tracking and Monitoring
                    </span>
                  </li>
                  <li className='flex items-center py-2 space-x-4 xl:py-3'>
                    <svg
                      className='w-8 h-8 text-green-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      ></path>
                    </svg>
                    <span className='font-medium text-gray-500'>
                      100% Protection and Security for Your App
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0'>
              <img
                className='mx-auto sm:max-w-sm lg:max-w-full'
                src='https://cdn.devdojo.com/images/november2020/feature-graphic.png'
                alt='feature image'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24'>
        <div className='box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10'>
            <img
              src='https://cdn.devdojo.com/images/december2020/productivity.png'
              className='p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl'>
              Boost Productivity
            </h2>
            <p className='pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg'>
              Build an atmosphere that creates productivity in your organization
              and your company culture.
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                <span
                  className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full'
                  data-primary='yellow-400'
                >
                  <span className='text-sm font-bold'>✓</span>
                </span>{' '}
                Maximize productivity and growth
              </li>
              <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                <span
                  className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full'
                  data-primary='yellow-400'
                >
                  <span className='text-sm font-bold'>✓</span>
                </span>{' '}
                Speed past your competition
              </li>
              <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                <span
                  className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full'
                  data-primary='yellow-400'
                >
                  <span className='text-sm font-bold'>✓</span>
                </span>{' '}
                Learn the top techniques
              </li>
            </ul>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16'>
          {/* <!-- Content --> */}
          <div className='box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl'>
              Automated Tasks
            </h2>
            <p className='pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                <span
                  className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full'
                  data-primary='yellow-400'
                >
                  <span className='text-sm font-bold'>✓</span>
                </span>{' '}
                Automated task management workflow
              </li>
              <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                <span
                  className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full'
                  data-primary='yellow-400'
                >
                  <span className='text-sm font-bold'>✓</span>
                </span>{' '}
                Detailed analytics for your data
              </li>
              <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                <span
                  className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full'
                  data-primary='yellow-400'
                >
                  <span className='text-sm font-bold'>✓</span>
                </span>{' '}
                Some awesome integrations
              </li>
            </ul>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2'>
            <img
              src='https://cdn.devdojo.com/images/december2020/settings.png'
              className='pl-4 sm:pr-10 xl:pl-10 lg:pr-32'
            />
          </div>
        </div>
      </section>
      <section className='py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24'>
        <div className='max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12'>
          <div className='flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row'>
            <div className='box-border flex-1 text-center border-solid sm:text-left'>
              <h2 className='m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl'>
                Boost Your Productivity
              </h2>
              <p className='mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl'>
                Our service will help you maximize and boost your productivity.
              </p>
            </div>
            <a
              href='#_'
              className='inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-indigo-600 border border-indigo-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl'
              data-primary='indigo-600'
              data-rounded='rounded'
            >
              Get Started
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 ml-2'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <polyline points='12 5 19 12 12 19'></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
          <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                About
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                Blog
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                Team
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                Pricing
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                Contact
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'
              >
                Terms
              </a>
            </div>
          </nav>
          <div className='flex justify-center mt-8 space-x-6'>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Facebook</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Instagram</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Twitter</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>GitHub</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Dribbble</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </div>
          <p className='mt-8 text-base leading-6 text-center text-gray-400'>
            &copy; 2022 AuthX, Inc. All rights reserved.
          </p>
        </div>
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 50vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: start;
        padding: 0 1.5rem;
      }
    `}</style>
    </div>
  );
};

export default DevLanding;
