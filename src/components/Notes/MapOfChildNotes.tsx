import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { IMapOfChildNotes } from '../../types/types';
import { ModalAskingForm } from './ModalAskingForm';
import { CHECK_NOTE, DELETE_NOTE } from '../../store/actions/notesAction';
import { Checkbox } from '../Utils/Checkbox';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Note = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding: 5px 0 3px 40px;
  font-size: 18px;
  transition: 0.2s;

  ${useMediaQuery.sm`
  padding-left: 27px;
  `}

  ${useMediaQuery.xs`
  padding-left: 16px;
  `}
`;

export const MapOfChildNotes: FC<IMapOfChildNotes> = ({
  children,
  text,
  id,
  checked,
}) => {
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

  return (
    <>
      <Note>
        <Item>
          <Checkbox
            checked={checked}
            checkNote={() => checkNote(id)}
            openModal={() => setToogleModal(true)}
            label={text}
            id={id}
          />
          {children}
        </Item>
      </Note>
      {toogleModal ? <ModalAskingForm deleteNote={deleteNote} id={id} /> : null}
    </>
  );
};
