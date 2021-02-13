import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { Notes } from './Notes';

export const ListOfNotes: FC = () => {
  return (
    <Container maxWidth="xs">
      <Notes />
    </Container>
  );
};
