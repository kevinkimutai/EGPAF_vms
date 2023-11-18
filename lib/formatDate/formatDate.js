export const formatDate = (dbDate) => {
  if (!dbDate) {
    return null;
  }
  const date = new Date(dbDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year.toString().slice(-2)}`;

  return formattedDate;
};
