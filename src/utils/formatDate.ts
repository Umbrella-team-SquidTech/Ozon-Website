export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  };
  // @ts-expect-error ignored types
  return date.toLocaleDateString("fr", options);
};

export const compareDates = (date1: string, date2: string) => {
  const date1Obj = new Date(date1);
  const date2Obj = new Date(date2);
  return date1Obj.getTime() > date2Obj.getTime();
};

export const formatMemberSince = (date: string) => {
  const dateObj = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
  };
  // @ts-expect-error ignored types
  return dateObj.toLocaleDateString("fr", options);
};
