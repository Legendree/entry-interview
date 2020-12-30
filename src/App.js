import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LeftBar } from './components/LeftBar';
import { SearchBar } from './components/SearchBar';

import jobs from './data/jobs.json';
import filters from './data/filters.json';
import { RightBar } from './components/RightBar';
import { Footer } from './components/Footer';
import { Department } from './components/Department';

export const App = () => {
  const [job, setJob] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    setJob(jobs);
  }, []);

  const searchJob = (value) => {
    const searchTerm = value.toLowerCase();

    const filtered = jobs.map((job) => {
      return {
        ...job,
        items: job.items.filter(
          (item) =>
            item.job_title.toLowerCase().includes(searchTerm) ||
            item.department.includes(searchTerm) ||
            item.name.toLowerCase().includes(searchTerm)
        ),
      };
    });

    setJob(filtered);
  };

  const searchByKeywords = (keywordToAdd) => {
    const index = keywords.indexOf(keywordToAdd);

    if (index > -1) {
      const filtered = keywords.splice(index, 1);
      setKeywords(filtered);
    } else {
      setKeywords([...keywords, keywordToAdd]);
    }

    const filtered = jobs.map((job) => {
      return {
        ...job,
        items: job.items.filter((item) =>
          item.department.some((r) => keywords.includes(r))
        ),
      };
    });

    setJob(keywords.length !== 0 ? filtered : jobs);
    console.log(keywords);
  };

  // Didn't understand how execatly I suppose to sort by education or role
  // If I should've assigned levels to sort each property or I should've just sort
  // by string..
  //   const sortJobs = (location, role, department, education, experience) => {
  //    jobs.map((job) => {
  //      return {
  //        ...job,
  //       items: job.items
  //        .sort((a, b) => a.location > b.location)
  //        .sort((a, b) => a.experience > b.experience),
  //    };
  //  });
  //};

  return (
    <div className='relative flex flex-col flex-1 min-h-screen bg-gray-100'>
      <Header />
      <SearchBar search={searchJob} />
      <div className='flex lg:mx-5 flex-1'>
        <LeftBar
          data={filters}
          onClickMore={() => setIsPopupOpen(true)}
          onClickKeyword={searchByKeywords}
        />
        <RightBar data={job} />
      </div>
      <Footer />
      {isPopupOpen && (
        <Department onClick={() => setIsPopupOpen(false)} data={filters} />
      )}
    </div>
  );
};
