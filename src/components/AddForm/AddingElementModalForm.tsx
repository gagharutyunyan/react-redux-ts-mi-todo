import React, { FC } from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';

import { IOpenFormButton } from '../../types/types';
import { SelectNoteToAdd } from './SelectNoteToAdd';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'absolute',
      right: 8,
      top: 8,
      cursor: 'pointer',
    },
  })
);

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
  height: 50vh;
  min-width: 480px;
  min-height: 300px;
  background: #fff;
  background-size: cover;
  padding-top: 30px;
  z-index: 100;
`;

export const AddingElementModalForm: FC<IOpenFormButton> = ({
  setToogleModal,
}) => {
  const classes = useStyles();
  return (
    <Modal>
      <Content>
        <CancelIcon
          className={classes.root}
          fontSize="large"
          color="primary"
          onClick={() => setToogleModal(false)}
        />
        <form>
          Select categorie
          <SelectNoteToAdd />
        </form>
      </Content>
    </Modal>
  );
};
