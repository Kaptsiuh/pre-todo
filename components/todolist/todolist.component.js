import { AddNewTaskDialog } from "./AddNewRaskDialog/AddNewTaskDialog.component.js";
import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Headers } from "./Header/Headers.js";
import { TasksList } from "./TaskList/TasksList.js";

export function Todolist(data) {
  const container = document.createElement("div");

  const headerElement = Headers(data.title);
  const tasksListElement = TasksList(data.tasks);
  const buttonsElement = ButtonsPanel();
  const dialog = AddNewTaskDialog();

  container.append(headerElement);
  container.append(tasksListElement);
  container.append(buttonsElement);
  container.append(dialog);

  return container;
}
