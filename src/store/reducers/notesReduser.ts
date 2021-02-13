import { createAction, createReducer } from '@reduxjs/toolkit';
import { uid } from 'uid';

import { useCheckNote } from '../../hooks/useCheckNote';
import { useDeleteNote } from '../../hooks/useDeleteNote';
import { Inotes, IinitialState } from '../../types/types';

const initialState: IinitialState = {
  notes: [
    {
      text: 'hey1',
      id: uid(16),
      checked: false,
      childs: [
        {
          text: 'hey2',
          id: uid(16),
          checked: false,
          childs: [{ text: 'hey3', id: uid(16), checked: true }],
        },
        {
          text: 'hey2',
          id: uid(16),
          checked: false,
          childs: [
            {
              text: 'hdasdasfasfsvdfdsgdsgreregey3',
              id: uid(16),
              checked: true,
            },
            { text: 'hey3', id: uid(16), checked: true },
          ],
        },
      ],
    },
    {
      text: 'bro1',
      id: uid(16),
      checked: false,
      childs: [
        {
          text: 'bro2',
          id: uid(16),
          checked: false,
          childs: [{ text: 'bro3', id: uid(16), checked: false }],
        },
      ],
    },
  ],
  toogleDeleteModal: false,
  toogleAddModal: false,
};

const CHECK_NOTE = createAction<string, 'CHECK_NOTE'>('CHECK_NOTE');
const DELETE_NOTE = createAction<string, 'DELETE_NOTE'>('DELETE_NOTE');
const ADD_NOTE = createAction<string, 'ADD_NOTE'>('ADD_NOTE');

export const notesReduser = createReducer(initialState, {
  [CHECK_NOTE.type]: (state, { payload }: { payload: string }) => {
    state.notes.forEach((note) => {
      useCheckNote(note, payload);
      note.childs.forEach((childNote) => {
        useCheckNote(childNote, payload);
        childNote.childs.forEach((nestedNote) => {
          useCheckNote(nestedNote, payload);
        });
      });
    });
  },
  [DELETE_NOTE.type]: (state, { payload }: { payload: string }) => {
    state.notes.forEach((note, index) => {
      useDeleteNote(state.notes, note.id, payload, index);
      note.childs.forEach((childNote, index) => {
        useDeleteNote(note.childs, childNote.id, payload, index);
        childNote.childs.forEach((nestedChild, index) => {
          useDeleteNote(childNote.childs, nestedChild.id, payload, index);
        });
      });
    });
  },
  [ADD_NOTE.type]: (state, { payload }: { payload: Inotes }) => {
    console.log('push');
    state.notes.push(payload);
  },
});

// without mutation and createReducer
/*export const notesReduser = ( 
  state = initialState,
  action: UserAction
): IinitialState => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case ActionTypes.DELETE_NOTE: {
      const { payload } = action;

      const newNote = state.notes.filter((note) => note.id !== payload);
      const childNote = newNote.filter((note) => note.id !== payload);
      const nestedNote = childNote.filter((note) => note.id !== payload);

      return { ...state };
    }
    case ActionTypes.CHECK_NOTE: {
      const { payload } = action;
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === payload) {
            return {
              ...note,
              checked: !note.checked,
            };
          } else {
            return {
              ...note,
              childs: note.childs.map((childNote) => {
                if (childNote.id === payload) {
                  return {
                    ...childNote,
                    checked: !childNote.checked,
                  };
                }
                return {
                  ...childNote,
                  childs: childNote.childs.map((nestedChild) => {
                    if (nestedChild.id === payload) {
                      return {
                        ...nestedChild,
                        checked: !nestedChild.checked,
                      };
                    }
                    return nestedChild;
                  }),
                };
              }),
            };
          }
        }),
      };
    }
    default:
      return state;
  }
};
*/
