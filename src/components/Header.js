import React from 'react';
import { Menu } from '../vectors/menu';

export const Header = () => {
  return (
    <div className='flex px-2 lg:px-7 items-center justify-between h-16 w-full bg-white'>
      <div className='flex items-center'>
        <button className='lg:hidden ml-3 mr-5 w-4 h-4 text-blue-500 focus:outline-none'>
          <Menu />
        </button>
        <span className='text-blue-400 font-medium'>HEALTH EXPLORE</span>
      </div>
      <ul className='hidden lg:flex text-sm font-medium'>
        <li className='mx-3'>
          <a href='#'>PROFILE</a>
        </li>
        <li className='mx-3'>
          <a href='#'>JOBS</a>
        </li>
        <li className='mx-3'>
          <a href='#'>PROFESSIONAL NETWORK</a>
        </li>
        <li className='mx-3'>
          <a href='#'>LOUNGE</a>
        </li>
        <li className='mx-3'>
          <a href='#'>SALARY</a>
        </li>
      </ul>
      <div className='flex items-center'>
        <button className='hidden lg:flex border-blue-400 bg-transparent text-blue-400 border text-sm px-3 py-2 rounded-md font-medium transition duration-200 ease-in-out hover:bg-blue-400 hover:text-white'>
          CREATE JOB
        </button>
        <div className='relative'>
          <div className='flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full lg:mx-5 uppercase text-white font-medium'>
            sd
          </div>
          <div className='absolute -top-2 lg:-right-1 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full mx-5 uppercase text-white text-xs font-medium border-2 border-white'>
            2
          </div>
        </div>
        <button className='hidden lg:flex font-medium text-sm'>LOGOUT</button>
      </div>
    </div>
  );
};
