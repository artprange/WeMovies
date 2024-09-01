import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const SuccessContainer = styled.div`
  background: ${(props) => props.theme.white};
  max-width: 67.5rem;
  margin: 0 auto;
  padding: 0 1rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;

  p {
    padding-top: 4rem;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-gray']};
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 auto;

    width: 20.5rem;
    height: 32.35rem;
  }
`

export const SuccessContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  p {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-gray']};
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      width: 14.875rem;
      height: 14.5rem;
    }
  }
`
