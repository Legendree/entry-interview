import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LeftBar } from './components/LeftBar';
import { SearchBar } from './components/SearchBar';

import jobs from './data/jobs.json';
import filters from './data/filters.json';
import { RightBar } from './components/RightBar';
import { Footer } from './components/Footer';
import { Close } from './vectors/ Close';
import { numberWithCommas } from './utils/helpers';

export const App = () => {
  const [job, setJob] = useState(jobs);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const searchJob = (value) => {
    const searchTerm = value.toLowerCase();

    const filtered = jobs.map((job) => {
      return {
        ...job,
        items: job.items.filter(
          (item) =>
            item.job_title.toLowerCase().includes(searchTerm) ||
            item.job_type.toLowerCase().includes(searchTerm) ||
            item.department
              .map((dep) => dep.toLowerCase())
              .includes(searchTerm) ||
            item.name.toLowerCase().includes(searchTerm)
        ),
      };
    });

    setJob(filtered);
  };

  const sortJobs = () => {};

  return (
    <div className='relative flex flex-col flex-1 min-h-screen bg-gray-100'>
      <Header />
      <SearchBar search={searchJob} />
      <div className='flex lg:mx-5 flex-1'>
        <LeftBar data={filters} onClickMore={() => setIsPopupOpen(true)} />
        <RightBar data={job} />
      </div>
      <Footer />
      {isPopupOpen && (
        <div
          onClick={() => setIsPopupOpen(false)}
          className='absolute flex h-full w-full bg-black bg-opacity-25'
        >
          <div className='fixed flex h-screen w-full justify-center items-center'>
            <div className='flex flex-col w-3/4 bg-white rounded shadow-xl'>
              <div className='flex justify-between items-center p-4'>
                <span className='text-xl font-medium'>department</span>
                <button className='w-3 h-4'>
                  <Close />
                </button>
              </div>
              <div className='border-b border-gray-200' />
              <div className='flex flex-wrap justify-between p-4 text-xs'>
                {filters.department.map((dep) => (
                  <a
                    key={dep.key}
                    className='w-1/4 break-words m-2'
                    href='#job'
                  >
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
      )}
    </div>
  );
};
