import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IOpenFormButton } from '../../types/types';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 20,
      marginLeft: 10,
      minWidth: 220,
    },
  })
);

export const OpenFormButton: FC<IOpenFormButton> = ({ setToogleModal }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      onClick={() => setToogleModal(true)}
      variant="contained"
      color="primary"
      startIcon={<AddCircleIcon />}
    >
      Add Note
    </Button>
  );
};
