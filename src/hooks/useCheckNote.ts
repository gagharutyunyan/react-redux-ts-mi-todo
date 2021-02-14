import { Inote } from '../types/types';

export const useCheckNote = (
  parentNote: boolean,
  note: Inote,
  payload: string
) => {
  if (note.id === payload) {
    note.checked = !note.checked;
  } else if (parentNote) {
    note.checked = true;
  }
};
