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
  id: string;
  checkNote: (id: string) => void;
  openModal: () => void;
}

export interface IDeleteIcon {
  openModal: () => void;
}

export type TisChecked = { checked: boolean };

export interface IFormOpenButton {
  setToogleModal: (param: boolean) => void;
}

export interface IAddButton {
  handler: () => void;
  disabled?: boolean;
}

export interface IAddNote {
  id: string;
  text: string;
}
export interface ISelectNote {
  setSelectNote: (id: string) => void;
}

export interface IForm {
  onSubmit: () => void;
}

export interface IInputFields {
  noteText: string;
}
