import { Container } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from '../../hooks/useStyles';
import { AddButton } from './AddButton';
import { Notes } from './Notes';

export const ListOfNotes: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
      <Notes />
    </Container>
  );
};
