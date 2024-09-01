import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;

  font-weight: 700;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};

  img {
    width: 0.85rem;
  }

  span {
    font-size: inherit;
    font-weight: 400;
  }

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.mobile}) {
  }
`

export const EmptyCartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['blue-500']};
`

export const AddedToCart = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};
`
