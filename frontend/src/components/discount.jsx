import React from 'react'

function Discount() {
  return (
    <div>
      <div
  id="sticky-banner"
  tabIndex={-1}
  className="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
>
  <div className="flex items-center mx-auto">
    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      <span>
        New brand identity has been launched for the{" "}
        <a
          href="/"
          className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
        >
          Get new discounts on new courses
        </a>
      </span>
    </p>
  </div>
  <div className="flex items-center">
    <button
      data-dismiss-target="#sticky-banner"
      type="button"
      className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close banner</span>
    </button>
  </div>
</div>

    </div>
  )
}

export default Discount
