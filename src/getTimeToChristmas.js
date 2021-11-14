import { DateTime, Interval } from 'luxon';

function getTimeToChristmas() {
  const now = DateTime.now();
  const currentYear = now.year;

  let christmas;
  if (now.month === 12 && now.day >= 25) {
    christmas = DateTime.local(currentYear + 1, 12, 25, 0, 0, 0);
  } else {
    christmas = DateTime.local(currentYear, 12, 25, 0, 0, 0);
  }

  const interval = Interval.fromDateTimes(now, christmas);
  const duration = interval.toDuration(['days', 'hours', 'minutes', 'seconds']).toObject();

  duration.seconds = Math.floor(duration.seconds);

  return duration;
}

export default getTimeToChristmas;
