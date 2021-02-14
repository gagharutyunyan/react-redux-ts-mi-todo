import { createReducer } from '@reduxjs/toolkit';
import { uid } from 'uid';

import { useCheckNote } from '../../hooks/useCheckNote';
import { useDeleteNote } from '../../hooks/useDeleteNote';
import { IinitialState, IAddNote } from '../../types/types';

import { CHECK_NOTE, DELETE_NOTE, ADD_NOTE } from '../actions/notesAction';

const initialState: IinitialState = {
  notes: [
    {
      text: 'Level 1',
      id: uid(16),
      checked: false,

      children: [
        {
          text: 'level 2',
          id: uid(16),
          checked: false,
          children: [{ text: 'Level 3', id: uid(16), checked: true }],
        },
        {
          text: 'Test 2',
          id: uid(16),
          checked: false,
          children: [
            {
              text: 'Level 3',
              id: uid(16),
              checked: true,
            },
            { text: 'hey3', id: uid(16), checked: true },
          ],
        },
      ],
    },
    {
      text: 'Test №1036 :)',
      id: uid(16),
      checked: false,
      children: [
        {
          text: 'children',
          id: uid(16),
          checked: false,
          children: [{ text: 'grandchildren', id: uid(16), checked: false }],
        },
      ],
    },
  ],
};

export const notesReduser = createReducer(initialState, {
  [CHECK_NOTE.type]: (state, { payload }: { payload: string }) => {
    state.notes.forEach((note) => {
      useCheckNote(false, note, payload);
      note.children.forEach((childNote) => {
        useCheckNote(note.checked, childNote, payload);
        childNote.children.forEach((nestedNote) => {
          useCheckNote(childNote.checked, nestedNote, payload);
        });
      });
    });
  },
  [DELETE_NOTE.type]: (state, { payload }: { payload: string }) => {
    state.notes.forEach((note, index) => {
      useDeleteNote(state.notes, note.id, payload, index);
      note.children.forEach((childNote, index) => {
        useDeleteNote(note.children, childNote.id, payload, index);
        childNote.children.forEach((nestedChild, index) => {
          useDeleteNote(childNote.children, nestedChild.id, payload, index);
        });
      });
    });
  },
  [ADD_NOTE.type]: (state, { payload }: { payload: IAddNote }) => {
    const schema = {
      text: payload.text,
      id: uid(16),
      checked: false,
      children: [],
    };
    if (!payload.id) {
      return { ...state, notes: [...state.notes, schema] };
    }
    state.notes.forEach((note) => {
      if (note.id === payload.id) {
        note.children.push(schema);
      } else {
        note.children.forEach((childNote) => {
          if (childNote.id === payload.id) {
            childNote.children.push(schema);
          }
        });
      }
    });
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

      return { ...state, notes: [...newNote] };
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
