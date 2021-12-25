import { DateTime, Interval } from 'luxon';

/**
  * @returns {days, hours, minutes, seconds, milliseconds, totalSeconds}
  * If current date is December 25, returns all 0's
  * If current date is between December 26 and December 31, returns all -1's
 */
function getTimeToChristmas() {
  const now = DateTime.now();
  const currentYear = now.year;

  let duration = {
    days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0,
  };

  if (now.month === 12 && now.day > 25) {
    duration = {
      days: -1, hours: -1, minutes: -1, seconds: -1, totalSeconds: -1,
    };
  } else if (now.month !== 12 || now.day !== 25) {
    const christmas = DateTime.local(currentYear, 12, 25, 0, 0, 0);

    const interval = Interval.fromDateTimes(now, christmas);
    duration = interval.toDuration(['days', 'hours', 'minutes', 'seconds', 'milliseconds']).toObject();

    if (duration.milliseconds > 0) {
      if (duration.seconds < 59) {
        duration.seconds += 1;
      } else {
        duration.minutes += 1;
        duration.seconds = 0;
      }
    }

    duration.totalSeconds = christmas - now;
  }

  return duration;
}

export default getTimeToChristmas;
