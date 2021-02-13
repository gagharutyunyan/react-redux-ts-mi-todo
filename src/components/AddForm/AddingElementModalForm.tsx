import React, { FC } from 'react';
import styled from 'styled-components';
import { SelectNoteToAdd } from './SelectNoteToAdd';

const Modal = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  background-size: cover;
  left: 0;
  top: 0;
  z-index: 10;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  min-width: 480px;
  min-height: 300px;
  background: #fff;
  background-size: cover;
  padding-top: 30px;
  z-index: 10;
`;

export const AddingElementModalForm: FC = () => {
  return (
    <Modal>
      <Content>
        <form>
          Select categorie
          <SelectNoteToAdd />
        </form>
      </Content>
    </Modal>
  );
};
