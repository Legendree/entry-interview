import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LeftBar } from './components/LeftBar';
import { SearchBar } from './components/SearchBar';

import jobs from './data/jobs.json';
import filters from './data/filters.json';
import { RightBar } from './components/RightBar';
import { Footer } from './components/Footer';

export const App = () => {
  const [job, setJob] = useState(jobs);

  useEffect(() => {}, []);

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
    <div className='flex flex-col flex-1 min-h-screen bg-gray-100'>
      <Header />
      <SearchBar search={searchJob} />
      <div className='flex lg:mx-5 flex-1'>
        <LeftBar data={filters} />
        <RightBar data={job} />
      </div>
      <Footer />
    </div>
  );
};
