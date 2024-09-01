import { render } from '@testing-library/react';


import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import { Header } from './index';

describe('Header', () => {
  it('should render the header component', () => {
    const wrapper = render(
      <MemoryRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </MemoryRouter>
    );

    wrapper.debug();
  });
});
