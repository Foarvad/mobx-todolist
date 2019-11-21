import React from 'react';
import { Wrapper, Title, Description, Input, Column } from './TodoItem-styles';


function TodoItem({ task, checkTask, taskId }) {
  const { isFinished, title, description } = task;

  console.log(isFinished);

  return (
    <Wrapper isFinished={isFinished}>
      <Column>
        <Title>{title} {taskId}</Title>
        <Description>{description}</Description>
      </Column>
      <Column>
        <Input type="checkbox" onClick={checkTask} defaultChecked={isFinished}></Input>
      </Column>
    </Wrapper>
  );
}

export default TodoItem;
