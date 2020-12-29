export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getInitialis = (x) => {
  return x.substr(0, 2);
};

export const getDepartments = (x) => {
  return x.join().replaceAll(',', ', ');
};
