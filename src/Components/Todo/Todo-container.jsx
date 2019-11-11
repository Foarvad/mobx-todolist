import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import TodoView from './Todo-view';


@inject('TasksModel')
@observer
class Todo extends Component {
    render() {
        const {
            TasksModel: { tasks },
        } = this.props;

        return <TodoView tasks={tasks} addTask={this.handleAddTask}/>;
    }

    handleAddTask = () => {
        const { TasksModel: { addTask } } = this.props;

        addTask({ id: 1, isFinished: false, title: 'New task', description: 'Description of a new task' });
    }
}

export default Todo;
