export const data = {
  todolist: {
    id: createUniqId(),
    title: "toLearn",
    tasks: [
      {
        id: createUniqId(),
        title: "Learn HTML",
      },
      {
        id: createUniqId(),
        title: "Learn CSS",
      },
    ],
  },
};

let notifySubscriber = () => {
  console.warn("No data change subscriber");
};

export function subscribe(subscriber) {
  notifySubscriber = subscriber;
}

function createUniqId() {
  return Math.floor(Math.random() * 100000);
}

export function createTask() {
  const newTask = {
    id: createUniqId(),
    title: "-----------",
  };
  data.todolist.tasks.push(newTask);

  notifySubscriber();
}

export function deleteTask(id) {
  data.todolist.tasks = data.todolist.tasks.filter((e) => e.id != id);
  notifySubscriber();
}
