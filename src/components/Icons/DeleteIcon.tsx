import React, { FC } from 'react';

import styled from 'styled-components';
import { DeleteForever } from '@styled-icons/material/DeleteForever';
import { IDeleteIcon } from '../../types/types';

const StyledDeleteIcon = styled(DeleteForever)`
  position: absolute;
  top: -5px;
  right: -36px;
  width: 35px;
  height: 35px;
  cursor: pointer;
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
