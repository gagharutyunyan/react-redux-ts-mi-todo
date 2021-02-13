import { IMapOfChildNotes, Inotes } from '../types/types';

export const useNormaliseNoteObject = (notes: Inotes[]) => {
  const normilisedArray: IMapOfChildNotes[] = [];
  notes.forEach(({ text, id, checked, childs }) => {
    normilisedArray.push({ text, id, checked });
    childs.forEach(({ text, id, checked }) => {
      normilisedArray.push({ text, id, checked });
    });
  });

  return normilisedArray;
};
