import React, { FC } from 'react';
import { IModalAskingForm } from '../../types/types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useMediaQuery } from '../../hooks/useMediaQuery';

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: -200px;

  ${useMediaQuery.md`
    max-width: 700px;
    font-size: 26px;
  `}

  ${useMediaQuery.sm`
    max-width: 420px;
    font-size: 22px;
    margin-top: -130px;
  
  `}

  ${useMediaQuery.xs`
    font-size: 18px;
    margin-top: -100px;
  `}
`;

export const ModalAskingForm: FC<IModalAskingForm> = ({ deleteNote, id }) => {
  return (
    <Modal onClick={() => deleteNote(false, id)}>
      <Content>
        Удаляю этот элемент, хотите этого?
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
