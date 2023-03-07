function getSleepHours(day) {
    switch (day) {
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
}
  
  function getActualSleepHours() {
    return getSleepHours('sunday') +
        getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday');
}
  
  function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
}
  
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect Sleep Amount Achieved');
  } else if (actualSleepHours > idealSleepHours)  {
    console.log('You\'ve slept more than nessecsary');
  } else if (actualSleepHours < idealSleepHours)  {
    console.log('Go to bed, you need more rest');
  }
