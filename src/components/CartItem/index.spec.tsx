import { render } from '@testing-library/react';
import { CartItem } from './index'


describe('CartItem', () => {
    it('should render the CartItem component', () => {
      const mockItem = {
        id: 1,
        title: 'Test Product',
        price: 100.0,
        image: 'test-image-url',
        quantity: 2,
      };
  
      const mockOnDelete = vi.fn();
      const mockOnIncrease = vi.fn();
      const mockOnDecrease = vi.fn();
  
      const { container } = render(
        <CartItem
          item={mockItem}
          onDelete={mockOnDelete}
          onIncrease={mockOnIncrease}
          onDecrease={mockOnDecrease}
        />
      );
  
      expect(container).toBeInTheDocument();
    });
  });