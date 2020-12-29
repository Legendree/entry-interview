import React from 'react';
import { Ascending } from '../vectors/Ascending';
import { Descending } from '../vectors/Descending';

export const SortingButton = ({ name = 'Sortin Button Name' }) => {
  const [sortMode, setSortMode] = React.useState(0);

  const displaySortMode = (mode) => {
    switch (mode) {
      case 0:
        return <div />;

      case 1:
        return (
          <div className='ml-1 w-2 h-2'>
            <Ascending />
          </div>
        );

      case 2:
        return (
          <div className='ml-1 w-2 h-2'>
            <Descending />
          </div>
        );

      default:
        return <div />;
    }
  };

  const changeSortMode = () => {
    if (sortMode >= 2) setSortMode(0);
    else setSortMode(sortMode + 1);
  };

  return (
    <button
      onClick={() => changeSortMode()}
      className='flex mr-2 focus:outline-none items-center'
    >
      <span className={`${sortMode !== 0 && 'font-bold'}`}>{name}</span>
      {displaySortMode(sortMode)}
    </button>
  );
};
