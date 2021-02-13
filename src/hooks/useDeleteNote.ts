import { Ichild, IMapOfChildNotes, Inotes } from '../types/types';

export const useDeleteNote = (
  note: Inotes[] | Ichild[] | IMapOfChildNotes[],
  id: string,
  payload: string,
  index: number
) => {
  if (id === payload) {
    note.splice(index, 1);
  }
};
