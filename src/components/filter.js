import {createElement} from "../utils.js";

const createFilterTemplate = (filters) => {
  return (
    `<section class="main__filter filter container">
      ${filters
        .map((it, i) => {
          return (
            `<input
              type="radio"
              id="filter__${it.name}"
              class="filter__input visually-hidden"
              name="filter"
              ${i === 0 ? `checked` : ``}
            />
            <label for="filter__${it.name}" class="filter__label"
              >${it.name} <span class="filter__${it.name}-count">${it.count}</span></label
            >`);
        }).join(``)
    }
    </section>`);
};

export default class Filter {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
