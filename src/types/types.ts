import { ReactNode } from 'react';

export interface Inote {
  text: string;
  id: string;
  checked: boolean;
}
export interface IMapOfChildNotes extends Inote {
  children?: ReactNode;
}

export interface Ichild extends Inote {
  children: IMapOfChildNotes[];
}

export interface Inotes extends Inote {
  children: Ichild[];
}

export interface IinitialState {
  notes: Inotes[];
}
export interface IModalAskingForm {
  deleteNote: (isDelete: boolean, id: string) => void;
  id: string;
}

export interface ICheckbox {
  checked: boolean;
  label: string;
  checkNote: (id: string) => void;
  openModal: () => void;
  id: string;
}

export interface IDeleteIcon {
  openModal: () => void;
}

export type TisChecked = { checked: boolean };

export interface IOpenFormButton {
  setToogleModal: (param: boolean) => void;
}
