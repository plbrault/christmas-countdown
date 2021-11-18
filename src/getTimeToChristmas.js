import { DateTime, Interval } from 'luxon';

function getTimeToChristmas() {
  const now = DateTime.now();
  const currentYear = now.year;

  let duration = {
    days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0,
  };

  if (now.month !== 12 || now.day !== 25) {
    let christmas;
    if (now.month === 12 && now.day > 25) {
      christmas = DateTime.local(currentYear + 1, 12, 25, 0, 0, 0);
    } else {
      christmas = DateTime.local(currentYear, 12, 25, 0, 0, 0);
    }

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
