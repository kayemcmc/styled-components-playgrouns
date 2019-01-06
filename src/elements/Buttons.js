import styled from 'styled-components';
import { teal, elevation } from '../utilities';

export const Button = styled.button`
  padding: ${props => (props.type === 'cancel' ? '10px 5px' : '20px 10px')};
  border-radius: ${props => (props.type === 'cancel' ? '40px' : '6px')};
  border: none;
  color: ${props => (props.type === 'cancel' ? 'black' : 'white')};
  font-size: ${props => (props.type === 'cancel' ? '1rem' : '2rem')};
  outline: ${props => (props.type === 'cancel' ? '0' : '0')};
  background: ${teal};
  ${elevation[1]};
  ${({ size }) => {
    if (size === 'small') {
      return `
      font-size: 1rem;
      padding: 3px 10px;
      `;
    }
  }}
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;
