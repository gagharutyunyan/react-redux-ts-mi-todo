import { Inote } from '../types/types';

export const useCheckNote = (note: Inote, payload: string) => {
  if (note.id === payload) {
    note.checked = !note.checked;
  }
};
