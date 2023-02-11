import renderSingleTodoItem from "../components/single/todo.single";
import { editWrapper, render, todosItems } from "../index";
import { LOCAL_STORAGE_KEY } from "./constants";

export function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export function setDataToLocalStorage(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function resetInitialUI() {
  todosItems.innerHTML = "";
  editWrapper.innerHTML = "";
}

export function renderTodos() {
  const todos = getDataFromLocalStorage();
  todos.forEach((el) => {
    const createdEl = renderSingleTodoItem(el);

    todosItems.appendChild(createdEl);
  });
}
