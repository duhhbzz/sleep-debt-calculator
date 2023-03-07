const getSleepHours = day =>  {
  switch (day)  {
    case 'sunday':
      return 8;
      break;
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 4;
      break;
    case 'saturday':
      return 4;
      break;
  };
};

const getActualSleepHours = () =>
  getSleepHours('sunday') +
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
