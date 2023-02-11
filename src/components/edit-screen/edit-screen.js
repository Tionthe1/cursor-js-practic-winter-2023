import { editWrapper, render } from "../../index";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../helpers/functions";

let titleTextContent, subtitleTextContent;

function renderEditScreen({ title, subTitle, isChecked, id }) {
  const inputTitle = document.createElement("input");
  const inputSubtitle = document.createElement("input");
  const addTodoBtn = document.createElement("button");
  addTodoBtn.textContent = title ? "Edit todo" : "Add todo";
  addTodoBtn.classList.add("add-todo");

  inputTitle.classList.add("single-todo");
  inputSubtitle.classList.add("single-todo");

  if (title) {
    titleTextContent = title;
    inputTitle.value = title;
  }

  if (subTitle) {
    subtitleTextContent = subTitle;
    inputSubtitle.value = subTitle;
  }

  inputTitle.addEventListener("input", (e) => {
    titleTextContent = e.target.value;
  });

  inputSubtitle.addEventListener("input", (e) => {
    subtitleTextContent = e.target.value;
  });

  addTodoBtn.addEventListener("click", () => {
    addTodo(id, isChecked);
  });

  editWrapper.appendChild(inputTitle);
  editWrapper.appendChild(inputSubtitle);
  editWrapper.appendChild(addTodoBtn);
}

function addTodo(itemId, isChecked) {
  const previousLocalData = getDataFromLocalStorage();

  const singleItem = {
    id: itemId ? itemId : Date.now(),
    title: titleTextContent,
    subTitle: subtitleTextContent,
    date: new Date(),
    isChecked,
  };

  if (itemId) {
    const findIndexForExistingItem = previousLocalData.findIndex(
      (el) => el.id === itemId
    );
    previousLocalData[findIndexForExistingItem] = singleItem;
  } else {
    previousLocalData.push(singleItem);
  }

  setDataToLocalStorage(previousLocalData);
  render();
}

export default renderEditScreen;
