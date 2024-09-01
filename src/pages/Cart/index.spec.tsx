import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { useCart } from '../../context/CartContext';
import { Cart } from './index';

// Mock do useCart
vi.mock('../../context/CartContext', () => ({
  useCart: vi.fn(),
}));

describe('Cart', () => {
    it('should render the Cart component', () => {
      (useCart as ReturnType<typeof vi.fn>).mockReturnValue({
        cart: [],
        loading: false,
        removeItem: vi.fn(),
        increaseQuantity: vi.fn(),
        decreaseQuantity: vi.fn(),
        clearCart: vi.fn(),
      });
  
      const { container } = render(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      );
  
      expect(container).toBeInTheDocument();
    });
  });
  