import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { AddingElementModalForm } from './components/AddForm/AddingElementModalForm';
import { OpenFormButton } from './components/AddForm/OpenFormButton';
import { ListOfNotes } from './components/Notes/ListOfNotes';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 30,
    },
  })
);

export const App: FC = () => {
  const classes = useStyles();
  const [toogleModal, setToogleModal] = useState<boolean>(false);

  return (
    <Container className={classes.root} maxWidth="xs">
      <ListOfNotes />;
      <OpenFormButton setToogleModal={setToogleModal} />
      {toogleModal ? (
        <AddingElementModalForm setToogleModal={setToogleModal} />
      ) : null}
    </Container>
  );
};
