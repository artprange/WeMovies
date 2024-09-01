import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'
import notFound from '../../assets/images/notFound.svg'
import notFoundMobile from '../../assets/images/notFoundMobile.svg'

export const CartContainer = styled.div`
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
    max-width: 22.5rem;
    margin: 1rem auto;
    padding: 1rem;
  }
`

export const ItemInfoHeader = styled.div`
  width: 62.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(porps) => porps.theme['gray-700']};
  > div {
    &:first-child {
      width: 17.5rem;
    }
    &:nth-child(2) {
      width: 21.75rem;
    }
    &:last-child {
      width: 21.75rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const CheckoutContainer = styled.div`
  width: 62.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 0;

    width: 20.5rem;
  }
`

export const CheckoutButton = styled.button`
  padding: 0.875rem 3rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['blue-500']};
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 18.5rem;
    order: 2;
  }
`
export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  margin-bottom: 1.9rem;

  h1 {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme['base-gray']};
    font-size: 1.5rem;
  }
  span::after {
    content: ' ';
  }
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    width: 20.5rem;
    order: 1;
    margin: 1rem 0 1rem 0;
  }
`

export const EmptyCartContainer = styled.div`
  max-width: 67.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-gray']};

    @media (max-width: ${breakpoints.mobile}) {
      width: 12.5rem;
      text-align: center;
    }
  }

  img {
    width: 27.93rem;
    height: 15.58rem;
    content: url(${notFound});

    @media (max-width: ${breakpoints.mobile}) {
      content: url(${notFoundMobile});
      width: 11.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 32.25rem;
    margin: 0;
  }
`
