import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MapOfChildNotes } from './MapOfChildNotes';

export const ListOfNotes: FC = React.memo(() => {
  const { notes } = useTypedSelector((state) => state.user);
  return (
    <Container maxWidth="xs">
      {notes.map((props) => {
        return (
          <MapOfChildNotes key={props.id} {...props}>
            {props.children.map((note) => {
              return (
                <MapOfChildNotes key={note.id} {...note}>
                  {note.children.map((childNote) => {
                    return (
                      <MapOfChildNotes key={childNote.id} {...childNote} />
                    );
                  })}
                </MapOfChildNotes>
              );
            })}
          </MapOfChildNotes>
        );
      })}
    </Container>
  );
});
