import React from 'react';
import { JobListing } from './JobListing';

export const RightBar = ({ data }) => {
  return (
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
        {data.map((listing) => (
          <JobListing
            key={listing.name}
            name={listing.name}
            positions={listing.items.length}
            list={listing.items}
          />
        ))}
      </div>
    </div>
  );
};
