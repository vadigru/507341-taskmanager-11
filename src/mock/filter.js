import {FILTER_NAMES} from '../const.js';

const getFiltersCount = (tasks, name) => {
  const arr = [];
  const isOverdue = (it) => new Date(it.dueDate) < new Date() && it.dueDate !== null ? arr.push(it) : ``;
  const isToday = (it) => new Date(it.dueDate).getDate() === new Date().getDate() ? arr.push(it) : ``;
  const isFavorite = (it) => it.isFavorite ? arr.push(it) : ``;
  const isRepeating = (it) => Object.keys(it).some((dayName) => it[dayName] ? arr.push(it) : ``);
  const isArchive = (it) => it.isArchive ? arr.push(it) : ``;

  tasks.forEach((it) => {
    switch (name) {
      case `overdue`:
        isOverdue(it);
        break;
      case `today`:
        isToday(it);
        break;
      case `favorites`:
        isFavorite(it);
        break;
      case `repeating`:
        isRepeating(it.repeatingDays);
        break;
      case `archive`:
        isArchive(it);
        break;
      default:
        arr.push(it);
    }
  });

  return arr.length;
};

export const generateFilters = (tasks) => {
  return FILTER_NAMES.map((it) => {
    return {
      name: it,
      count: getFiltersCount(tasks, it),
    };
  });
};
