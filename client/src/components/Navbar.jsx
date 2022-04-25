import React from 'react';
import { Link } from 'react-router-dom';

import useStore from '../utils/store';

const Navbar = () => {
  const { name } = useStore((state) => state);
  return (
    <div className="w-full flex justify-between bg-green-50 p-5">
      {!name ? (
        <>
          <img src="https://ik.imagekit.io/manuelalferez/chatcus/tr:w-0.4/brandname_qEVMdzDXuJY.png" className="ml-4" />
          <a
            href="https://github.com/manuelalferez/chatcus"
            target="_blank"
            className="flex items-center rounded-md border-green-700 text-green-700 border-2 p-2 hover:bg-green-100"
            rel="noreferrer"
          >
            <img src="https://ik.imagekit.io/manuelalferez/chatcus/github_SB4aytK3j.png" alt="logo" />
            <span className="pl-2">GitHub</span>
          </a>
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
