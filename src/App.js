import React from 'react';
import { Header } from './components/Header';
import { LeftBar } from './components/LeftBar';
import { SearchBar } from './components/SearchBar';

import jobs from './data/jobs.json';
import filters from './data/filters.json';

export const App = () => {
  return (
    <div className='flex flex-col flex-1 min-h-screen bg-gray-100'>
      <Header />
      <SearchBar />
      <div className='flex mx-5 flex-1'>
        <LeftBar data={filters} />
        <div className='flex flex-col flex-1 p-4 bg-white border border-gray-200 text-xs'>
          <div className='flex justify-between mb-6 mt-4'>
            <div>
              <span className='font-bold'>7,753</span> <span>job postings</span>
            </div>
            <div>
              <span className='text-gray-400 mr-2'>Sort by</span>
              <button className='mr-2 focus:outline-none'>Location</button>
              <button className='mr-2 focus:outline-none'>Role</button>
              <button className='mr-2 focus:outline-none'>Department</button>
              <button className='mr-2 focus:outline-none'>Education</button>
              <button className='ml-2 focus:outline-none'>Experience</button>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex mx-2 items-center my-2'>
              <div className='flex justify-center items-center text-lg font-medium bg-gray-300 w-8 h-8 rounded-lg text-white'>
                MD
              </div>
              <span className='ml-3'>8 jobs for Mammoth Hospital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
