import renderEditScreen from "./components/edit-screen/edit-screen";
import {
  getDataFromLocalStorage,
  renderTodos,
  resetInitialUI,
} from "./helpers/functions";
import "./styles/main.scss";

let isEditing = getDataFromLocalStorage().length === 0;

export const editWrapper = document.getElementById("edit");
export const todosItems = document.getElementById("todos");
export const addBtn = document.getElementById("add");

render(isEditing);

export function render(isEdit) {
  resetInitialUI();

  addBtn.style.visibility = isEdit ? "hidden" : "visible";
  if (isEdit) {
    renderEditScreen({
      title: isEdit.title || "",
      isChecked: isEdit.isChecked || false,
      subTitle: isEdit.subTitle || "",
      date: isEdit.date || new Date(),
      id: isEdit.id
    });
    return;
  }

  renderTodos();
}

addBtn.addEventListener("click", () => {
  isEditing = !isEditing;

  render(isEditing);
});
