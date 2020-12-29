import React, { useEffect } from 'react';

import { numberWithCommas } from '../utils/helpers';

export const LeftBar = ({ data, onClickMore }) => {
  return (
    <div className='hidden lg:flex flex-col w-64 mr-5'>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>JOB TYPE</span>
        <ul className='mt-2'>
          {data.job_type.map((job) => (
            <li className='my-2' key={job.key}>
              <a href='#'>
                <span className='mr-2'>{job.key}</span>
                <span className='text-gray-400'>
                  {numberWithCommas(job.doc_count)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>DEPARTMENT</span>
        <ul className='mt-2'>
          {data.department.slice(0, 15).map((job) => (
            <li className='my-2' key={job.key}>
              <a href='#'>
                <span className='mr-2'>{job.key}</span>
                <span className='text-gray-400'>
                  {numberWithCommas(job.doc_count)}
                </span>
              </a>
            </li>
          ))}
          <li className='mt-2'>
            <button
              className='border-b border-transparent hover:border-blue-500 text-blue-500 focus:outline-none'
              onClick={onClickMore}
            >
              Show more
            </button>
          </li>
        </ul>
      </div>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>WORK SCHEDULE</span>
        <ul className='mt-2'>
          {data.work_schedule.map((job) => (
            <li className='my-2' key={job.key}>
              <a href='#'>
                <span className='mr-2'>{job.key}</span>
                <span className='text-gray-400'>
                  {numberWithCommas(job.doc_count)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>EXPERIENCE</span>
        <ul className='mt-2'>
          {data.experience.map((job) => (
            <li className='my-2' key={job.key}>
              <a href='#'>
                <span className='mr-2'>{job.key}</span>
                <span className='text-gray-400'>
                  {numberWithCommas(job.doc_count)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
