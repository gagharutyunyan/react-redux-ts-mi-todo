import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { AddingElementModalForm } from './components/AddForm/AddingElementModalForm';
import { FormOpenButton } from './components/AddForm/FormOpenButton';
import { ListOfNotes } from './components/Notes/ListOfNotes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const App: FC = () => {
  const [toogleModal, setToogleModal] = useState<boolean>(false);

  return (
    <Container>
      <ListOfNotes />
      <FormOpenButton setToogleModal={setToogleModal} />
      {toogleModal ? (
        <AddingElementModalForm setToogleModal={setToogleModal} />
      ) : null}
    </Container>
  );
};
