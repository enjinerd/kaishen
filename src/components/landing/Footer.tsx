import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-indigo-100 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 font-primary ">
      <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://ron/.my.id" className="font-semibold hover:underline">
          KM_G2FE2230_Roni Ardiyanto™
        </a>
      </span>
    </footer>
  );
};

export default Footer;
