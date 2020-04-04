import {createSiteMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createTaskTemplate} from './components/task.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {render} from './utils.js';

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = document.querySelector(`.board`);
const taskElement = document.querySelector(`.board__tasks`);

render(taskElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
