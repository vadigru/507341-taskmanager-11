const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const getRepeatingDaysCount = (item) => {
  const keys = Object.keys(item);
  let result;
  for (const key of keys) {
    if (item[key] === true) {
      result = true;
    }
  }
  return result;
};

const getFiltersCount = (index, tasks) => {
  const arr = [];

  tasks.forEach((item) => {
    if (index === filterNames.indexOf(`all`)) {
      arr.push(item);
    }
    if (index === 1 && item.dueDate < new Date() && item.dueDate !== null) {
      arr.push(item);
    }
    if (index === 2 && item.dueDate === new Date()) {
      arr.push(item);
    }
    if (index === 3 && item.isFavorite) {
      arr.push(item);
    }
    if (index === 4 && getRepeatingDaysCount(item.repeatingDays)) {
      arr.push(item);
    }
    if (index === 5 && item.isArchive) {
      arr.push(item);
    }
  });
  return arr.length;
};

const generateFilters = (tasks) => {
  return filterNames.map((it, i) => {
    return {
      name: it,
      count: getFiltersCount(i, tasks),
    };
  });
};

export {generateFilters};
