import AbstractComponent from './abstract-component.js';

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

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
