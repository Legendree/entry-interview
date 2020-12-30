import React from 'react';
import { numberWithCommas } from '../utils/helpers';

export const KeywordButton = ({ title, count = '3000', onClick }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <li className='my-2'>
      <button
        className='focus:outline-none text-left'
        onClick={() => {
          onClick();
          setIsClicked(!isClicked);
        }}
      >
        <span className={`mr-2 ${isClicked && 'font-medium'}`}>{title}</span>
        <span className='text-gray-400'>{numberWithCommas(count)}</span>
      </button>
    </li>
  );
};
