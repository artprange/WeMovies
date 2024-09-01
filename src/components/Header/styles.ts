import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const HeaderContainer = styled.header`
  max-width: 67.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;

  h1 {
    font-size: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 22.5rem;
    justify-content: space-between;
    
    h3 {
      display: none;
    }
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
 
  @media (max-width: ${breakpoints.mobile}) {
    width: 5.625rem;
    justify-content: space-around;
  }
`

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h3 {
    font-weight: 600;
    font-size: 0.875rem;
    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 600;
  }
`

export const CartImageContainer = styled.div`
  img {
    height: 2.5rem;
    width: 2.5rem;
  }
`
