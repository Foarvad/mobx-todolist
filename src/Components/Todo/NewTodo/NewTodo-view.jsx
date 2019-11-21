import React from 'react';
import { observer } from 'mobx-react';

import { Wrapper } from './Todo-styles';


function NewTodo() {
  return (
    <Wrapper>
      <input type="text"></input>
      <input type="text"></input>
    </Wrapper>
  );
}

export default observer(NewTodo);
