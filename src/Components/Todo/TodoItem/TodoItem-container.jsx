import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import TodoItemView from './TodoItem-view';


@inject('TasksModel')
@observer
class TodoItem extends Component {
  render() {
    const { task, taskId } = this.props;

    return <TodoItemView task={task} checkTask={this.handleCheckTask} taskId={taskId} />;
  }

  handleCheckTask = (e) => {
    const {
      TasksModel: { completeTask, renewTask },
      taskId,
    } = this.props;

    if (e.target.checked) {
      completeTask(taskId);
    } else {
      renewTask(taskId);
    }
  };
}

export default TodoItem;
