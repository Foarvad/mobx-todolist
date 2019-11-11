import React from 'react';
import { Wrapper, Title, Description } from './TodoItem-styles';


function TodoItem(task) {
    const { isFinished, title, description } = task;

    return (
        <Wrapper isFinished={isFinished}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    );
}

export default TodoItem;
