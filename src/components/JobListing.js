import React, { useState } from 'react';
import { getInitialis } from '../utils/helpers';
import { JobPosition } from './JobPosition';

import { v4 as uuidv4 } from 'uuid';

export const JobListing = ({
  positions = 4,
  name = 'Los Robles Hospital',
  list,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='flex flex-col m-2 focus:outline-none'
      >
        <div className='flex items-center'>
          <div className='flex uppercase items-center justify-center bg-gray-300 w-8 h-8 rounded-lg text-white text-lg font-medium '>
            {getInitialis(name)}
          </div>
          <span className='ml-3'>
            {positions} jobs for {name}
          </span>
        </div>
      </button>
      {isExpanded && (
        <div className='flex flex-col w-full'>
          {list.map((listing) => (
            <JobPosition
              key={uuidv4()} // Would use
              title={listing.job_title}
              job_type={listing.job_type}
              salary_range={listing.salary_range}
              city={listing.city}
              summary={listing.description}
              department={listing.department}
              hours={listing.hours}
              created={listing.created}
            />
          ))}
        </div>
      )}
    </div>
  );
};
