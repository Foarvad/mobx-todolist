import { observable, action, computed, toJS } from 'mobx';


class TasksModel {
  @observable tasks = [
    {
      isFinished: true,
      title: 'New task',
      description: 'Description of a new task',
    },
  ];

  @action addTask = (task) => {
    const { title, description } = task;

    this.tasks.push({ title, description, isFinished: false });
  };

  @action completeTask = (id) => {
    if (this.tasks[id]) this.tasks[id].isFinished = true;
  };

  @action renewTask = (id) => {
    if (this.tasks[id]) this.tasks[id].isFinished = false;
  };

  @action deleteTask = (id) => {
    this.tasks = this.tasks.filter((task, index) => index !== id); // TODO: Prevent id reassignment in all tasks
  };

  @computed get completedTasksCount() {
    return this.tasks.filter((task) => task.isFinished === true).length;
  }

  @computed get totalTasksCount() {
    return this.tasks.length;
  }

  @computed get sortedTasks() {
    const array = toJS(this.tasks.slice().sort((first, second) => +first.isFinished - +second.isFinished));
    console.log(array);
    return array;
  }
}

export default new TasksModel();
