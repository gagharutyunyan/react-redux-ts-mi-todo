import React, { FC } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './hooks/useStyles';

import { AddingElementModalForm } from './components/AddForm/AddingElementModalForm';
import { AddButton } from './components/AddForm/AddButton';
import { ListOfNotes } from './components/Notes/ListOfNotes';

const App: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <ListOfNotes />
      <AddButton />
      <AddingElementModalForm />
    </Container>
  );
};

export default App;
