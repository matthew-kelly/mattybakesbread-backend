export const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`; // MM/DD/YYYY
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
