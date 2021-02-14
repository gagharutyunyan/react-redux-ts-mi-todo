import React, { FC } from 'react';
import { ICheckbox, TisChecked } from '../../types/types';
import styled from 'styled-components';
import { DeleteIcon } from '../Icons/DeleteIcon';

const CheckboxContainer = styled.div`
  display: flex;
  min-width: 350px;
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props: TisChecked) =>
    props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Label = styled.label`
  position: relative;
  margin-left: 8px;
  text-decoration: ${(props: TisChecked) =>
    props.checked ? 'line-through' : 'none'};
`;

export const Checkbox: FC<ICheckbox> = ({
  checked,
  label,
  checkNote,
  openModal,
  id,
}) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => checkNote(id)}
      />
      <StyledCheckbox checked={checked} onClick={() => checkNote(id)}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Label htmlFor={id} checked={checked}>
        {label}
        {checked ? <DeleteIcon openModal={openModal} /> : null}
      </Label>
    </CheckboxContainer>
  );
};
