import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-gray-50 py-12 px-6 sm:px-16 mt-20 dark:bg-slate-900 dark:text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold  mb-6 colorChange">About PageTurner</h1>
            <p className="text-lg text-gray-700 mb-8 dark:text-white">
              Welcome to <span className="font-semibold colorChange ">PageTurner</span>, your one-stop destination for discovering and buying the best books online. Our mission is to create a seamless and enjoyable reading experience for book lovers across the globe.
            </p>
            
            <h2 className="text-3xl font-semibold colorChange mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 dark:text-white">
              At PageTurner, we believe in the power of books to inspire, educate, and entertain. Our goal is to make a wide variety of books accessible to readers everywhere, from bestsellers to hidden gems. We are committed to providing a user-friendly platform that makes finding and purchasing books easy and enjoyable.
            </p>

            <h2 className="text-3xl font-semibold colorChange mb-4">Our Values</h2>
            <ul className="space-y-4 text-lg text-gray-700 list-inside">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='dark:text-white'>Customer Satisfaction: We strive to offer the best customer experience.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='dark:text-white'>Quality: We focus on curating a collection of high-quality books.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='dark:text-white'>Innovation: We continuously improve our platform to make it better for readers.</span>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
