import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 18,
    },
  })
);

export const AddButton: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const obj = {
    text: 'hey10',
    id: 'dasdsa',
    checked: false,
    childs: [],
  };
  const push = () => {
    dispatch({ type: 'ADD_NOTE', payload: obj });
  };
  return (
    <Button
      className={classes.root}
      onClick={() => push()}
      variant="contained"
      color="primary"
      startIcon={<AddCircleIcon />}
    >
      Add Note
    </Button>
  );
};
