import React, { FC } from 'react';

import { IFormOpenButton } from '../../types/types';
import { AddButton } from '../Utils/AddButton';

export const FormOpenButton: FC<IFormOpenButton> = ({ setToggleModal }) => {
  return <AddButton handler={() => setToggleModal(true)}>Add Note</AddButton>;
};
