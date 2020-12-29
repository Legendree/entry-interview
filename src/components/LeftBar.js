import React from 'react';

export const LeftBar = ({ data }) => {
  const [filters, setFilters] = React.useState([]);

  React.useEffect(() => {
    setFilters(data);
    console.log(data);
  }, []);

  return (
    <div className='flex flex-col w-64 mr-5'>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3'>
        <span className='text-xs font-medium'>JOB TYPE</span>
        <ul className='text-xs mt-2'>
          {filters.job_type.map((job) => (
            <li className='my-2' key={job.key}>
              <a href='#'>
                <span className='mr-2'>{job.key}</span>
                <span className='text-gray-400'>{job.doc_count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full mb-5 bg-white border border-gray-200 p-3'>
        <span className='text-xs font-medium'>DEPARTMENT</span>
        <ul className='text-xs mt-2'>
          {filters.department.map((job) => (
            <li className='my-2' key={job.key}>
              <a href='#'>
                <span className='mr-2'>{job.key}</span>
                <span className='text-gray-400'>{job.doc_count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
