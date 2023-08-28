export const createFilterActiveItem = ({value, id}) => {
  const item = document.createElement('p');

  item.className = 'filter__item';
  item.innerHTML =  `
    <span>${value}</span>
    <label class="filter__item-disable" for="${id}">
      <svg
        class="filter__item-disable-icon"
        width="8"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlink:href="#close-icon"></use>
      </svg>
    </label>`;

  return item
};