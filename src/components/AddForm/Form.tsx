import React, { FC } from 'react';
import { IForm } from '../../types/types';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
`;

export const Form: FC<IForm> = ({ children, ...props }) => {
  return (
    <FormContainer noValidate {...props}>
      {children}
    </FormContainer>
  );
};
