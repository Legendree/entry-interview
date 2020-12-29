import React from 'react';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className='flex flex-col w-full'>
      {' '}
      <div className='flex px-2 lg:px-7 items-center justify-between h-16 w-full bg-white'>
        <div className='flex items-center'>
          <MobileMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
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
      {isMobileMenuOpen && (
        <div className='flex w-full bg-gray-100 px-4'>
          <ul>
            <li className='my-3'>
              <a href='#'>PROFILE</a>
            </li>
            <li className='my-3'>
              <a href='#'>JOBS</a>
            </li>
            <li className='my-3'>
              <a href='#'>PROFESSIONAL NETWORK</a>
            </li>
            <li className='my-3'>
              <a href='#'>LOUNGE</a>
            </li>
            <li className='my-3'>
              <a href='#'>SALARY</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
