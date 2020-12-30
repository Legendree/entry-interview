import React from 'react';

import { KeywordButton } from './KeywordButton';

export const LeftBar = ({ data, onClickMore, onClickKeyword }) => {
  return (
    <div className='hidden lg:flex flex-col w-64 mr-5'>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>JOB TYPE</span>
        <ul className='mt-2'>
          {data.job_type.map((job) => (
            <KeywordButton
              key={job.key}
              title={job.key}
              count={job.doc_count}
              onClick={() => onClickKeyword(job.key)}
            />
          ))}
        </ul>
      </div>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>DEPARTMENT</span>
        <ul className='mt-2'>
          {data.department.slice(0, 9).map((job) => (
            <KeywordButton
              key={job.key}
              title={job.key}
              count={job.doc_count}
              onClick={() => onClickKeyword(job.key)}
            />
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
            <KeywordButton
              key={job.key}
              title={job.key}
              count={job.doc_count}
              onClick={() => onClickKeyword(job.key)}
            />
          ))}
        </ul>
      </div>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3 text-xs'>
        <span className='font-medium'>EXPERIENCE</span>
        <ul className='mt-2'>
          {data.experience.map((job) => (
            <KeywordButton
              key={job.key}
              title={job.key}
              count={job.doc_count}
              onClick={() => onClickKeyword(job.key)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
