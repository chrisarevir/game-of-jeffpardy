import { endOfMonth, getMonth, getYear } from "date-fns";

const incrementMonth = (viewDate: Date) => {
  const today = new Date();
  const newMonth = getMonth(viewDate) + 1;

  if (newMonth === getMonth(today)) {
    return today;
  }

  return endOfMonth(new Date(getYear(viewDate), newMonth));
};

export default incrementMonth;
