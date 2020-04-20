import {COLORS, DAYS, DescriptionItems, DefaultRepeatingDays} from '../const.js';
import {getRandomArrayItem, getRandomDate} from '../utils/common.js';

const generateRepeatingDays = () => {
  const repeatingDay = Object.assign({}, DefaultRepeatingDays);
  DAYS.forEach((day) => {
    repeatingDay[day] = Math.random() > 0.5;
  });
  return repeatingDay;
};

export const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();
  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    color: getRandomArrayItem(COLORS),
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

export const generateTasks = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateTask);
};
