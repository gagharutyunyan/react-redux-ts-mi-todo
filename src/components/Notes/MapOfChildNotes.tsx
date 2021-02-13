import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

import { useStyles } from '../../hooks/useStyles';
import { TisChecked, IMapOfChildNotes } from '../../types/types';
import { ModalAskingForm } from './ModalAskingForm';
import { CHECK_NOTE, DELETE_NOTE } from '../../store/actions/notesAction';

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
    dispatch(CHECK_NOTE(id));
  };

  const deleteNote = (isDelete: boolean, id: string) => {
    if (isDelete) {
      dispatch(DELETE_NOTE(id));
    }
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
