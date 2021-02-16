import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { AddingElementModalForm } from './components/AddForm/AddingElementModalForm';
import { FormOpenButton } from './components/AddForm/FormOpenButton';
import { ListOfNotes } from './components/Notes/ListOfNotes';
import { useMediaQuery } from './hooks/useMediaQuery';

const Container = styled.div`
  min-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  ${useMediaQuery.sm`
  margin-top: 50px;
  `}

  ${useMediaQuery.xs`
  margin-top: 30px;
  `}
`;

export const App: FC = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <Container>
      <ListOfNotes />
      <FormOpenButton setToggleModal={setToggleModal} />
      {toggleModal && (
        <AddingElementModalForm setToggleModal={setToggleModal} />
      )}
    </Container>
  );
};
