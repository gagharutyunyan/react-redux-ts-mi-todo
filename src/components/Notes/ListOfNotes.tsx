import React, { FC } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { MapOfChildNotes } from './MapOfChildNotes';

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListOfNotes: FC = React.memo(() => {
  const { notes } = useTypedSelector((state) => state.user);
  return (
    <Container>
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
