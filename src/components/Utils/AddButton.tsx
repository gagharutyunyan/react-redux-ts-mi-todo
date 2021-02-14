import React, { FC } from 'react';

import styled from 'styled-components';
import { IAddButton } from '../../types/types';

const Button = styled.button`
  min-width: 300px;
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  &:disabled {
    background: #ccc;
    cursor: default;
    color: #fff;
    border-color: #fff;
  }
`;

export const AddButton: FC<IAddButton> = ({ children, handler, disabled }) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handler();
      }}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
