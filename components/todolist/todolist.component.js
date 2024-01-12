import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Headers } from "./Header/Headers.js";
import { TasksList } from "./TaskList/TasksList.js";

export function Todolist(data) {
  const container = document.createElement("div");

  const headerElement = Headers(data.title);
  const tasksListElement = TasksList(data.tasks);
  const buttonsElement = ButtonsPanel();

  container.append(headerElement);
  container.append(tasksListElement);
  container.append(buttonsElement);

  return container;
}
