import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const CardsContainer = styled.div`
  width: 67.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const MovieContainer = styled.div`
  background: ${(props) => props.theme.white};
  width: 21.16rem;
  height: 20.25rem;

  margin-bottom: 1rem;
  border-radius: 4px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0;

  img {
    width: 9rem;
    height: 11.75rem;
  }

  p {
    color: ${(props) => props.theme['base-gray']};
    font-size: 0.75rem;
    font-weight: 700;
  }

  h4 {
    color: ${(props) => props.theme['base-gray']};
    font-size: 1rem;
    font-weight: bold;
  }

  span::after {
    content: ' ';
  }
`
