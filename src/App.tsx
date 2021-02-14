import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { AddingElementModalForm } from './components/AddForm/AddingElementModalForm';
import { OpenFormButton } from './components/AddForm/OpenFormButton';
import { ListOfNotes } from './components/Notes/ListOfNotes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App: FC = () => {
  const [toogleModal, setToogleModal] = useState<boolean>(false);

  return (
    <Container>
      <ListOfNotes />
      <OpenFormButton setToogleModal={setToogleModal} />
      {toogleModal ? (
        <AddingElementModalForm setToogleModal={setToogleModal} />
      ) : null}
    </Container>
  );
};
