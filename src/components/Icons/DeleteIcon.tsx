import React, { FC } from 'react';

import styled from 'styled-components';
import { DeleteForever } from '@styled-icons/material/DeleteForever';
import { IDeleteIcon } from '../../types/types';

const StyledDeleteIcon = styled(DeleteForever)`
  position: absolute;
  top: -7px;
  right: -32px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const DeleteIcon: FC<IDeleteIcon> = ({ openModal }) => {
  return (
    <StyledDeleteIcon
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }}
    />
  );
};
