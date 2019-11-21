import styled from 'styled-components';


export const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 2px 0 rgba(9,30,66,.25);
  border-radius: 5px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Column = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  &:last-of-type {
    flex: unset;
  }
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Description = styled.div`
  font-size: 14px;
`;

export const Input = styled.input``;
