export const getCurrDate = () => new Date();

export const getLastMonthDate = () => {
  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  currentMonth -= 1;

  if (currentMonth < 0) {
    currentMonth = 11; // December
    currentYear -= 1; // Move back one year
  }
  const oneMonthAgoDate = new Date(currentYear, currentMonth, currentDay);
  return oneMonthAgoDate;
};

export const getISOformatDate = (date) => new Date(date).toISOString();
export const getDateOnlyISOformat = (date) => {
  const isoDate = getISOformatDate(date);
  return isoDate.split("T")[0];
};

export const getFormattedDate = (date) => new Date(date).toString();

export const splitStrIntoArr = (str, splitOn) => (str.split(splitOn));

