import React from 'react';

import { Menu } from '../vectors/menu';

export const MobileMenu = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='lg:hidden ml-3 mr-5 w-4 h-4 text-blue-500 focus:outline-none'
    >
      <Menu />
    </button>
  );
};
