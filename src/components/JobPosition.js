import { is } from '@babel/types';
import React, { useState } from 'react';
import { getDepartments } from '../utils/helpers';

export const JobPosition = ({
  title = 'RN Outplatent',
  city = 'jobs_city',
  salary_range = [0, 10],
  job_type = 'part-time',
  department = ['sdsd', 'Sdsdsd', 'sdsd'],
  hours = [12],
  summary = 'summary here',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='focus:outline-none flex lg:flex-row flex-col justify-between lg:items-center w-full py-4 px-1 border-t border-gray-200'
      >
        <div className='flex items-start flex-col'>
          <span className='font-bold'>{title}</span>
          <span>{`${job_type} | $${salary_range[0]} - $${salary_range[1]} an hour | ${city}`}</span>
        </div>
        <span>3 weeks ago</span>
      </button>
      {isExpanded && (
        <div className='flex flex-col lg:flex-row w-full lg:items-center'>
          <div className='flex flex-1 flex-col p-1'>
            <div className='flex mb-2'>
              <span className='font-bold w-48'>Department:</span>
              <p className='break-words w-64'>{getDepartments(department)}</p>
            </div>
            <div className='flex mb-2'>
              <span className='font-bold w-48'>Hours / shift:</span>
              <p className='break-words w-64'>{`${hours[0]} hours / shift`}</p>
            </div>
            <div className='flex'>
              <span className='font-bold w-48'>Summary:</span>
              <p className='break-words w-64'>{summary}</p>
            </div>
          </div>
          <div className='flex lg:w-48 lg:flex-col lg:items-end'>
            <button className=' bg-blue-500 text-white rounded-lg px-5 py-2 m-1'>
              Job details
            </button>
            <button className='border border-blue-500 text-blue-500 rounded-lg px-5 py-2 m-1'>
              Save job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
