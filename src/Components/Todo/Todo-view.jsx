import React from 'react';
import { observer } from 'mobx-react';

import { Wrapper, Button, Info, InputWrapper, TodoListWrapper } from './Todo-styles';
import TodoItem from './TodoItem';


function Todo({ addTask, tasks, completedTasksCount, totalTasksCount }) {
  console.log(tasks[0]);
  return (
    <Wrapper>
      <Info>
        Tasks completed: {completedTasksCount}/{totalTasksCount}
      </Info>
      <InputWrapper>
        <Button onClick={addTask}>Add task</Button>
      </InputWrapper>
      <TodoListWrapper>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} taskId={index} />
        ))}
      </TodoListWrapper>
    </Wrapper>
  );
}

export default observer(Todo);
