export const createLi = ({ text, id }) =>
  `<li>${text}
  <button data-id='${id}'>Delete</button>
  </li>`;
