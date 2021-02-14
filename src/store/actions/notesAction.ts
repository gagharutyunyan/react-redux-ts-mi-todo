import { createAction } from '@reduxjs/toolkit';
import { IAddNote } from '../../types/types';

export const CHECK_NOTE = createAction<string, 'CHECK_NOTE'>('CHECK_NOTE');
export const DELETE_NOTE = createAction<string, 'DELETE_NOTE'>('DELETE_NOTE');
export const ADD_NOTE = createAction<IAddNote, 'ADD_NOTE'>('ADD_NOTE');
