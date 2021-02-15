import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { WindowClose } from '@styled-icons/boxicons-regular/WindowClose';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFormOpenButton, IInputFields } from '../../types/types';
import { SelectNote } from './SelectNote';
import { AddButton } from '../Utils/AddButton';
import { Form } from '../AddForm/Form';
import { ADD_NOTE } from '../../store/actions/notesAction';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  background-size: cover;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 40vh;
  min-width: 320px;
  min-height: 300px;
  background: #fff;
  background-size: cover;
  padding-top: 30px;
  z-index: 100;
`;

const Selection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  ${useMediaQuery.md`
  flex-direction: column;
  align-items: center;  
  `};
`;

const ErrorLabel = styled.label`
  position: absolute;
  top: -45px;
  right: 32%;
  color: red;
  ${useMediaQuery.md`
  position:static ;
    flex-direction: column;
    align-items: center;  
  
  `};
`;

const InputText = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
  ${useMediaQuery.md`
  width: 60%;
  `}
  ${useMediaQuery.sm`
  width: 70%;
  `}
`;

const CloseButton = styled(WindowClose)`
  position: absolute;
  top: 5px;
  right: 8px;
  width: 50px;
  height: 50px;
  color: palevioletred;
  cursor: pointer;
  &: hover {
    color: red;
  }
`;

const schema = yup.object().shape({
  noteText: yup.string().min(4, 'Your note min length must be 4'),
});

export const AddingElementModalForm: FC<IFormOpenButton> = ({
  setToogleModal,
}) => {
  const { register, handleSubmit, errors, formState } = useForm<IInputFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [selectNote, setSelectNote] = useState('');

  const addNote = () => {
    dispatch(ADD_NOTE({ id: selectNote, text: inputText }));
    setToogleModal(false);
  };

  return (
    <Modal>
      <Content>
        <CloseButton onClick={() => setToogleModal(false)} />
        <Form onSubmit={handleSubmit(addNote)}>
          <Selection>
            <SelectNote setSelectNote={setSelectNote} />
            <InputText
              type="text"
              name="noteText"
              id="noteText"
              placeholder="type something"
              onChange={(e) => setInputText(e.target.value)}
              ref={register}
              maxLength={25}
            />
            <ErrorLabel htmlFor="noteText">
              {errors?.noteText && <p>{errors.noteText.message}</p>}
            </ErrorLabel>
          </Selection>

          <AddButton handler={() => addNote()} disabled={!formState.isValid}>
            Add my new note
          </AddButton>
        </Form>
      </Content>
    </Modal>
  );
};
