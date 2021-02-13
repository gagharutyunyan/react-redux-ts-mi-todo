import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

import { useStyles } from '../../hooks/useStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNormaliseNoteObject } from '../../hooks/useNormaliseNoteObject';
import { AddButton } from './AddButton';

import { IMapOfChildNotes } from '../../types/types';
const Option = styled.option`
  font-size: 15px;
  min-width: 350px;
`;

export const SelectNoteToAdd = () => {
  const { notes } = useTypedSelector((state) => state.user);
  const arrayAllOfNotes: IMapOfChildNotes[] = useNormaliseNoteObject(notes);

  const classes = useStyles();

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Select</InputLabel>
      <Select native>
        <option aria-label="None" value="New Note">
          New Note
        </option>
        {arrayAllOfNotes.map(({ text, id, checked }) => {
          return (
            <Option key={id} value={id} disabled={checked}>
              {text} {checked ? 'Выполнен' : null}
            </Option>
          );
        })}
      </Select>
      <AddButton />
    </FormControl>
  );
};
