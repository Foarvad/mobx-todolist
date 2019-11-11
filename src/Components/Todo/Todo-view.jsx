import React from 'react';
import { Wrapper, Button } from './Todo-styles';
import TodoItem from './TodoItem';


function Todo({ tasks, addTask }) {
    return (
        <Wrapper>
            <Button onClick={addTask}>Add task</Button>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} />
            ))}
        </Wrapper>
    );
}

export default Todo;
