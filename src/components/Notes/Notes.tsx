import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MapOfChildNotes } from './MapOfChildNotes';

export const Notes: FC = React.memo(() => {
  const { notes } = useTypedSelector((state) => state.user);
  return (
    <>
      {notes.map((props) => {
        return (
          <MapOfChildNotes key={props.id} {...props}>
            {props.childs.map((note) => {
              return (
                <MapOfChildNotes key={note.id} {...note}>
                  {note.childs.map((childNote) => {
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
    </>
  );
});
