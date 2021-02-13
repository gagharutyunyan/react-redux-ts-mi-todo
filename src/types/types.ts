import { ReactNode } from 'react';

export type TisChecked = { isChecked: boolean };

export interface Inote {
  text: string;
  id: string;
  checked: boolean;
}
export interface IMapOfChildNotes extends Inote {
  children?: ReactNode;
}

export interface Ichild extends Inote {
  childs: IMapOfChildNotes[];
}

export interface Inotes extends Inote {
  childs: Ichild[];
}

export interface IinitialState {
  notes: Inotes[];
  toogleDeleteModal: boolean;
  toogleAddModal: boolean;
}

export interface IModalAskingForm {
  deleteNote: (answer: string, id: string) => void;
  id: string;
}
