import React, { FC } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNormaliseNoteObject } from '../../hooks/useNormaliseNoteObject';

import { IMapOfChildNotes, ISelectNote } from '../../types/types';

const Select = styled.select`
  top: 30px;
  left: 40px;
  font-size: 14px;
  border: none;
  width: 235px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  outline: none;

  background: white;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

const Option = styled.option`
  font-size: 20px;
  padding-top: 10px;
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
`;

export const SelectNote: FC<ISelectNote> = ({ setSelectNote }) => {
  const { notes } = useTypedSelector((state) => state.user);
  const arrayAllOfNotes: IMapOfChildNotes[] = useNormaliseNoteObject(notes);

  return (
    <Select onChange={(e) => setSelectNote(e.target.value)}>
      <Option value="">New Note</Option>
      {arrayAllOfNotes.map(({ text, id, checked }) => {
        return (
          <Option key={id} value={id} disabled={checked}>
            {text} {checked ? 'Выполнен' : null}
          </Option>
        );
      })}
    </Select>
  );
};
