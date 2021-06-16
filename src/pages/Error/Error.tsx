import React from 'react';

interface ErrorProps {}

function Error(props: ErrorProps) {
  return (
    <div
      className="z-50 absolute w-full h-full"
      style={{
        background: 'linear-gradient(189.16deg, #532ade 13.57%, #a03290 98.38%)',
      }}
    >
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center ">
        <div
          className=" shadow overflow-hidden sm:rounded-lg pb-8 shadow-2xl"
          style={{
            background: 'rgb(255,255,255,0.25)',
            borderRight: '1px solid #fff',
          }}
        >
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <h1 className="text-6xl font-medium py-8 text-gray-800">oops! Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium text-gray-800">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6 opacity-70">
              <a href="/">HOME</a>
            </button>
            <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md opacity-70">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
