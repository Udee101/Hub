import React from 'react';
import { Link } from 'react-router-dom';

import useStore from '../utils/store';

const Navbar = () => {
  const { name } = useStore((state) => state);
  return (
    <div className="w-full flex justify-between bg-green-50 p-5 top-0">
      {!name ? (
        <>
          <div className="h-12 ">
            <a href="#" className="ml-4 font-pacifico text-green-700 text-2xl md:text-3xl overflow-hidden">
              YctHub
            </a>
          </div>
        </>
      ) : (
        <>
          <Link to="/feed" className="text-green-700 border-2 p-2 hover:bg-green-100 border-green-700 rounded-md">
            Feed
          </Link>
          <Link to="/chat" className="text-green-700 border-2 p-2 hover:bg-green-100 border-green-700 rounded-md">
            Chatbox
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
