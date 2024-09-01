import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const ItemInfoContainer = styled.div`
  width: 62.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['gray-100']};
  padding: 1.5rem 0rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 18.5rem;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    background-color: ${(props) => props.theme.white};
  }
`

export const ItemDescription = styled.div`
  display: flex;

  align-items: center;
  width: 17.5rem;

  margin-right: 3.875rem;

  img {
    width: 5.6rem;
  }

  div {
    width: 6.93rem;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    h1 {
      color: ${(props) => props.theme['base-gray']};
      font-size: 1rem;
      font-weight: 700;
    }

    h2 {
      color: ${(props) => props.theme['base-gray']};
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;

    img {
      width: 4rem;
      height: 5.125rem;
    }

    div {
      width: 13.5rem;
      height: 1.375rem;

      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    h1 {
      font-size: 0.875rem;
      width: 6.375rem;
      margin-left: 5rem;
    }

    h2 {
      width: 6.375rem;

      font-size: 1rem;
    }
  }
`

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;

  width: 21.75rem;
  justify-content: flex-start;
  margin-right: 14.25em;

  input {
    text-align: center;
    width: 3.875rem;
    height: 1.625rem;
    border: 1px solid ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    font-weight: 400;
    font-family: inherit;
    color: ${(props) => props.theme['base-gray']};
    border-radius: 4px;
  }

  img {
    width: 1.125rem;
  }

  button {
    background: transparent;
    border: none;
    margin: 0 0.687rem 0 0.687rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 7.31rem;
    justify-content: center;
    width: 100%;
    margin-left: 11.125rem;
    margin-top: -1.625rem;
  }
`

export const Subtotal = styled.div`
  width: 62.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 0.275rem;

  h5 {
    display: none;
  }

  span {
    font-weight: 700;
    color: ${(props) => props.theme['base-gray']};
    font-size: 1rem;
  }

  button {
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    justify-content: center;
    width: 4.125rem;
    margin-bottom: 1.375rem;

    flex-direction: column;

    margin-left: 13.125rem;
    margin-top: -2rem;
    h5 {
      display: block;
      font-size: 0.75rem;
      color: ${(props) => props.theme['gray-700']};
      text-transform: uppercase;
      font-weight: 700;
    }

    span {
      font-weight: 700;
      color: ${(props) => props.theme['base-gray']};
      font-size: 1rem;
    }

    button {
      position: absolute;
      margin-left: 6rem;
      margin-top: -6.625rem;

      img {
        width: 1.5rem;
      }
    }
  }
`
