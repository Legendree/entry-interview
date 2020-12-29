import React from 'react';

import { Search } from '../vectors/Search';

export const SearchBar = ({
  search = () => {
    console.log('not set');
  },
}) => {
  return (
    <div className='flex lg:m-5 bg-white h-12 px-6 items-center border-t lg:border border-gray-200'>
      <div className='w-4 h-4 mr-3'>
        <Search />
      </div>
      <input
        onChange={(evnt) => search(evnt.currentTarget.value)}
        className='w-full h-full focus:outline-none font-light text-sm'
        type='text'
        placeholder='Search for any job, title, keywords or company'
      />
    </div>
  );
};
