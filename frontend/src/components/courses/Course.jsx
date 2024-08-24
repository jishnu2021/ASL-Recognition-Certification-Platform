import React from 'react'

import CourseCard from './CourseCard'
import CoursesPage from './CoursesPage'

function Course() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{fontFamily:700,fontSize:'2rem',color:'GrayText'}}>
        <b>Courses</b>
      </h1>
    <button
      data-collapse-toggle="navbar-hamburger"
      type="button"
      className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-hamburger"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className="hidden w-full" id="navbar-hamburger">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
            aria-current="page"
          >
            Free Courses
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Premium Courses
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div>
{/* <CourseCard/> */}
<CoursesPage/>
</div>

    </>
  )
}

export default Course
