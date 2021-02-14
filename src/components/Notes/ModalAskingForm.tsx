import React, { FC } from 'react';
import { IModalAskingForm } from '../../types/types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  background-size: cover;
  left: 0;
  top: 0;
  z-index: 10;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 28px;
  color: #fff;
  margin-top: 100px;
  margin-right: 100px;
`;

export const ModalAskingForm: FC<IModalAskingForm> = ({ deleteNote, id }) => {
  return (
    <Modal onClick={() => deleteNote(false, id)}>
      <Content>
        Вы пожалейте, если удалите этот элемент, хотите ли вы этого?
        <br />
        <br />
        <Button
          onClick={() => deleteNote(true, id)}
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon fontSize="small" />}
        >
          Да, удали!
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteNote(false, id)}
        >
          Нет, оставь
        </Button>
      </Content>
    </Modal>
  );
};
