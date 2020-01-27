const normalizeNewDate: (
  year: number,
  month: number,
  day: number,
  hour?: number,
  minute?: number,
  second?: number,
  millisecond?: number
) => Date = (
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0
) => {
  const normalizedDate = new Date();
  normalizedDate.setFullYear(year, month, day);
  normalizedDate.setHours(hour);
  normalizedDate.setMinutes(minute);
  normalizedDate.setSeconds(second);
  normalizedDate.setMilliseconds(millisecond);

  return normalizedDate;
};

export default normalizeNewDate;
