import React, { useEffect } from 'react';

import { numberWithCommas } from '../utils/helpers';

export const LeftBar = ({ data }) => {
  return (
    <div className='flex flex-col w-64 mr-5'>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3'>
        <span className='text-xs font-medium'>JOB TYPE</span>
        <ul className='text-xs mt-2'>
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
      <div className='w-full mb-5 bg-white border border-gray-200 p-3'>
        <span className='text-xs font-medium'>DEPARTMENT</span>
        <ul className='text-xs mt-2'>
          {data.department.map((job) => (
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
      <div className='w-full mb-5 bg-white border border-gray-200 p-3'>
        <span className='text-xs font-medium'>WORK SCHEDULE</span>
        <ul className='text-xs mt-2'>
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
      <div className='w-full mb-5 bg-white border border-gray-200 p-3'>
        <span className='text-xs font-medium'>EXPERIENCE</span>
        <ul className='text-xs mt-2'>
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
