import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import TodoView from './Todo-view';


@inject('TasksModel')
@observer
class Todo extends Component {
  render() {
    const {
      TasksModel: { tasks, completedTasksCount, totalTasksCount },
    } = this.props;

    return (
      <TodoView
        addTask={this.handleAddTask}
        tasks={tasks}
        completedTasksCount={completedTasksCount}
        totalTasksCount={totalTasksCount}
      />
    );
  }

  handleAddTask = () => {
    const {
      TasksModel: { addTask },
    } = this.props;

    addTask({
      isFinished: false,
      title: 'New task',
      description: 'Description of a new task',
    });
  };
}

export default Todo;
