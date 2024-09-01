import styled from 'styled-components'

export const BackToHomeButton = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 3.5rem;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    cursor: pointer;
  }
`
