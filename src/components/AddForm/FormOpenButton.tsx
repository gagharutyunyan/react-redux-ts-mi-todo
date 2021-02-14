import React, { FC } from 'react';

import { IFormOpenButton } from '../../types/types';
import { AddButton } from '../Utils/AddButton';

export const FormOpenButton: FC<IFormOpenButton> = ({ setToogleModal }) => {
  return <AddButton handler={() => setToogleModal(true)}>Add Note</AddButton>;
};
