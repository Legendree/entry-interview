import React from 'react';
import { numberWithCommas } from '../utils/helpers';
import { Close } from '../vectors/ Close';

export const Department = ({ onClick, data }) => {
  return (
    <div className='absolute flex h-full w-full bg-black bg-opacity-25'>
      <div className='fixed flex h-screen w-full justify-center items-center'>
        <div className='flex flex-col w-3/4 bg-white rounded shadow-xl'>
          <div className='flex justify-between items-center p-4'>
            <span className='text-xl font-medium'>department</span>
            <button onClick={onClick} className='w-3 h-4 focus:outline-none'>
              <Close />
            </button>
          </div>
          <div className='border-b border-gray-200' />
          <div className='flex flex-wrap justify-between p-4 text-xs'>
            {data.department.map((dep) => (
              <a key={dep.key} className='w-1/4 break-words m-2' href='#job'>
                <span className='mr-2'>{dep.key}</span>
                <span className='text-gray-400'>
                  {numberWithCommas(dep.doc_count)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
