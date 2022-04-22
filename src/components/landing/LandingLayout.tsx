import React from 'react';
import styles from './Hero.module.css';
import { Logo, SpotifyLogo } from '../ui';

const LandingLayout = () => {
  return (
    <>
      <div
        className={`shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 background-animate ${styles.hero}`}>
        <header className=" font-primary bg-gray-900 bg-opacity-50">
          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a href="https://flowbite.com" className="flex items-center">
                <Logo className="w-44 h-20" />
              </a>
              <div className="flex md:order-2">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get started
                </button>
                <button
                  data-collapse-toggle="mobile-menu-4"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-4"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-4">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ron.my.id"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className={`bg-center bg-cover w-full`}>
            <div className="flex justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
              <div className="text-center">
                <div className="container justify-evenly items-center flex flex-col md:flex-row gap-12">
                  <div className="w-2/3 md:w-1/3 mx-auto text-center">
                    <h2 className="mb-6 text-2xl lg:text-5xl font-bold text-gray-100">
                      Create your own playlist, share it with your friends and have fun!
                    </h2>
                    <p className="max-w-xl mx-auto mb-10 text-base md:text-lg text-gray-300 bg-orange-600 rounded-lg bg-opacity-75">
                      We do not store any of your data, we just use it to generate a
                      playlist.
                    </p>
                    <a
                      className="inline-block w-2/3 md:w-full md:w-auto mb-4 md:mr-6 py-3 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-green-800 hover:scale-95	hover:text-white border-2 border-green-700 text-gray-800 transition duration-200 shadow-lg flex flex-row justify-center items-center gap-3"
                      href="#">
                      <SpotifyLogo className="h-8 w-auto" /> <p>Login with Spotify</p>
                    </a>
                  </div>
                  <img
                    src="Playlist.png"
                    alt="Playlist"
                    className="h-auto w-2/4 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center py-16">
        <h1 className="text-3xl font-black text-center font-primary text-gray-800">
          Features
        </h1>
        <p className="text-gray-500 text-center">Explore what else we can do for you</p>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between items-center gap-6 max-w-xs py-12">
            <div className="p-2 rounded-full bg-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              Search your favorite songs.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Search for your favorite songs, artist, albums and create a playlist with
              them.
            </p>
          </div>
          <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between items-center gap-8 max-w-xs py-12">
            <div className="p-2 rounded-full bg-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              Brew your best playlist.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Create your own playlist with your favorite songs and enjoy it.
            </p>
          </div>
          <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col justify-between items-center gap-6 max-w-xs py-12">
            <div className="p-2 rounded-full bg-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              Share your playlist.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Share your playlist with your friends.
            </p>
          </div>
        </section>
      </div>

      <footer className="p-4 bg-indigo-100 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 font-primary ">
        <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="https://ron/.my.id" className="hover:underline font-semibold">
            KM_G2FE2230_Roni Ardiyanto™
          </a>
        </span>
      </footer>
    </>
  );
};

export default LandingLayout;
