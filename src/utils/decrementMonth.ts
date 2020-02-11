import { endOfMonth, getMonth, getYear } from "date-fns";

const decrementMonth = (viewDate: Date) => {
  const monthInView = getMonth(viewDate);

  if (monthInView === 0) {
    return viewDate;
  }

  return endOfMonth(new Date(getYear(viewDate), monthInView - 1));
};

export default decrementMonth;
