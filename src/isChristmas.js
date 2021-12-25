import { DateTime } from 'luxon';

export default function isChristmas() {
  const now = DateTime.local();
  return now.month === 12 && now.day === 25;
}