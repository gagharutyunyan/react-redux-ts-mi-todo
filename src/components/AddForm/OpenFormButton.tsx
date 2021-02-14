import React, { FC } from 'react';

import { IOpenFormButton } from '../../types/types';

export const OpenFormButton: FC<IOpenFormButton> = ({ setToogleModal }) => {
  return <button onClick={() => setToogleModal(true)}>Add Note</button>;
};
