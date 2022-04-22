import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16">
      <h1 className="text-3xl font-black text-center text-gray-800 font-primary">
        Features
      </h1>
      <p className="text-center text-gray-500">Explore what else we can do for you</p>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-between max-w-xs gap-6 p-6 py-12 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="p-2 bg-red-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-800"
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
        <div className="flex flex-col items-center justify-between max-w-xs gap-8 p-6 py-12 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="p-2 bg-green-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-800"
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
        <div className="flex flex-col items-center justify-between max-w-xs gap-6 p-6 py-12 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="p-2 bg-blue-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-800"
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
  );
};

export default Features;
