import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  sortByHeaviest: boolean;
  onClickFunction: () => void;
}

const Button: React.FC<Props> = ({sortByHeaviest, onClickFunction}) => {

  return (
    <ButtonContainer onClick={onClickFunction}>{sortByHeaviest ? "Lightest": "Heaviest"}</ButtonContainer>
  )
}

export default Button;

const ButtonContainer = styled.button`
  width: 120px;
  height: 40px;
  padding: 5px;
  border: 1px solid #fff;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  background: #000;
  color: #fff;

  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
`;