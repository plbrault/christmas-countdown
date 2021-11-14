import { DateTime, Interval } from 'luxon';

function getTimeToChristmas() {
  const now = DateTime.now();
  const currentYear = now.year;
  const christmas = DateTime.local(currentYear, 12, 25, 0, 0, 0);

  const interval = Interval.fromDateTimes(now, christmas);
  const duration = interval.toDuration(['days', 'hours', 'minutes', 'seconds']).toObject();

  duration.seconds = Math.ceil(duration.seconds);

  return duration;
}

export default getTimeToChristmas;
