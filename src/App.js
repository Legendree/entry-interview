import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LeftBar } from './components/LeftBar';
import { SearchBar } from './components/SearchBar';

import jobs from './data/jobs.json';
import filters from './data/filters.json';
import { RightBar } from './components/RightBar';

export const App = () => {
  const [job, setJob] = useState(jobs);

  useEffect(() => console.log(jobs), []);

  const searchJob = (value) => {
    const searchTerm = value.toLowerCase();
    const filtered = jobs.map((job) => {
      return {
        ...job,
        items: job.items.filter(
          (item) =>
            item.job_title.toLowerCase().includes(searchTerm) ||
            item.job_type.toLowerCase().includes(searchTerm) ||
            item.department.map((dep) => dep.toLowerCase()).includes(searchTerm)
        ),
      };
    });

    console.log(filtered[0].items);
    setJob(filtered);
  };

  const sortJobs = () => {};

  const getAllJobsAmount = () => {};

  return (
    <div className='flex flex-col flex-1 min-h-screen bg-gray-100'>
      <Header />
      <SearchBar search={searchJob} />
      <div className='flex mx-5 flex-1'>
        <LeftBar data={filters} />
        <RightBar data={job} />
      </div>
    </div>
  );
};
