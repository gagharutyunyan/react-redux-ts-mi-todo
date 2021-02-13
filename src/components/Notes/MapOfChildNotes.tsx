import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

import { useStyles } from '../../hooks/useStyles';
import { TisChecked, IMapOfChildNotes } from '../../types/types';
import { ModalAskingForm } from './ModalAskingForm';

const Note = styled.ul`
  position: relative;
  display: flex;
  margin: 0;
  padding-left: 18px;
`;

const Item = styled.li`
  position: relative;
  list-style-type: none;
  text-decoration: ${(props: TisChecked) =>
    props.isChecked ? 'line-through' : 'none'};
`;

export const MapOfChildNotes: FC<IMapOfChildNotes> = ({
  text,
  id,
  checked,
  children,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [toogleModal, setToogleModal] = useState(false);

  const checkNote = (id: string) => {
    dispatch({ type: 'CHECK_NOTE', payload: id });
  };

  const deleteNote = (answer: string, id: string) => {
    if (answer === 'yes') dispatch({ type: 'DELETE_NOTE', payload: id });
    setToogleModal(false);
  };

  const openDeleteModal = () => {
    setToogleModal(true);
  };

  return (
    <>
      <Note>
        <Item isChecked={checked}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => checkNote(id)}
                color={'primary'}
                inputProps={{
                  'aria-label': 'secondary checkbox',
                }}
              />
            }
            label={text}
          />
          {checked ? (
            <DeleteIcon
              className={classes.deleteIcon}
              onClick={() => openDeleteModal()}
            />
          ) : null}
          {children}
        </Item>
      </Note>
      {toogleModal ? <ModalAskingForm deleteNote={deleteNote} id={id} /> : null}
    </>
  );
};
