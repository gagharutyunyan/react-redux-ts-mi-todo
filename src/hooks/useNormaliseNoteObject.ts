import { IMapOfChildNotes, Inotes } from '../types/types';

export const useNormaliseNoteObject = (notes: Inotes[]) => {
  const normilisedArray: IMapOfChildNotes[] = [];
  notes.forEach(({ text, id, checked, children }) => {
    normilisedArray.push({ text, id, checked });
    children.forEach(({ text, id, checked }) => {
      normilisedArray.push({ text, id, checked });
    });
  });

  return normilisedArray;
};
