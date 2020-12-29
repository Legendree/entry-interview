import React from 'react';
import { getAllJobsAmount, numberWithCommas } from '../utils/helpers';
import { JobListing } from './JobListing';
import { SortingButton } from './SortingButton';

export const RightBar = ({ data }) => {
  const amount = getAllJobsAmount(data);
  return (
    <div className='flex flex-col flex-1 p-4 bg-white border border-gray-200 text-xs'>
      <div className='flex justify-between mb-6 mt-4'>
        <div>
          <span className='font-bold'>{numberWithCommas(amount)}</span>{' '}
          <span>job postings</span>
        </div>
        <div className='hidden lg:flex'>
          <span className='text-gray-400 mr-2'>Sort by</span>
          <SortingButton name='Location' />
          <SortingButton name='Role' />
          <SortingButton name='Department' />
          <SortingButton name='Education' />
          <SortingButton name='Experience' />
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
