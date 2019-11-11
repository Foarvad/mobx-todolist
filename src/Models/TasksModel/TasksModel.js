import { observable, action, computed } from 'mobx';


class TasksModel {
    @observable tasks = [];

    @action addTask = (task) => {
        const { id, isFinished, title, description } = task;

        this.tasks = [...this.tasks, { id, isFinished, title, description }];
    };

    @action deleteTask = (id) => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    };

    @computed get unfinishedTasksCount() {
        return this.tasks.filter((task) => task.isFinished === false).length;
    }
}

export default new TasksModel();
