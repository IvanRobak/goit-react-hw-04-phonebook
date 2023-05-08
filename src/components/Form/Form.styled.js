import styled from 'styled-components';

export const Form = styled.form`
  width: 75%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${'' /* outline: 1px solid tomato; */}
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 6px solid rgba(50, 57, 65, 1);
  letter-spacing: 1 px;
  margin-bottom: 10px;
  ${'' /* background: #c4c4c4; */}
`;
export const InputHeader = styled.h1`
  font-weigh: 400;
  font-size: 20px;
`;
export const InputName = styled.input`
  width: 70%;
  height: 12%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.2px;
  background: #ffff;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
`;
export const InputNumber = styled.input`
  width: 70%;
  height: 12%;
  letter-spacing: 1.2px;
  font-size: 14px;
  font-weight: 600;
  background: #ffff;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
`;
export const InputBtn = styled.button`
  width: 70%;
  height: 20%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2 px;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 6px;
  color: rgba(50, 57, 65, 1);
  background: cadetblue;

  &:hover {
    color: #ffff;
    border: 2px solid rgba(50, 57, 65, 1);
    background: #188ce8;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
