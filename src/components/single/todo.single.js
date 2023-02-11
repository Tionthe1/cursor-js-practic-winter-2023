import { render } from "../../index";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../helpers/functions";
import "./todoItem.scss";

const renderSingleTodoItem = ({ title, subTitle, date, isChecked, id }) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("single-todo");

  const contentWrapper = document.createElement("div");

  const titleText = document.createElement("h4");
  titleText.classList.add("single-todo-title");
  titleText.textContent = title;

  const subtitleText = document.createElement("p");
  subtitleText.classList.add("single-todo-subtitle");
  subtitleText.textContent = subTitle;

  const dateText = document.createElement("span");
  dateText.classList.add("single-todo-date");
  dateText.textContent = date;

  const actions = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("single-todo-checkbox");

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  editBtn.addEventListener("click", () => {
    render({ title, subTitle, date, isChecked, id });
  });

  if (isChecked) {
    checkbox.setAttribute("checked", "checked");
  }

  checkbox.addEventListener("input", (e) => {
    const prevData = getDataFromLocalStorage();
    const findItem = prevData.findIndex((el) => el.id === id);
    prevData[findItem] = { ...prevData[findItem], isChecked: e.target.checked };
    setDataToLocalStorage(prevData);
    render();
  });

  contentWrapper.appendChild(titleText);
  contentWrapper.appendChild(subtitleText);
  contentWrapper.appendChild(dateText);

  actions.appendChild(checkbox);
  actions.appendChild(editBtn);

  wrapper.appendChild(contentWrapper);
  wrapper.appendChild(actions);

  return wrapper;
};

export default renderSingleTodoItem;
