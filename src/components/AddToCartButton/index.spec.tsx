import { render } from '@testing-library/react';
import { Button } from './index';
import { ButtonProps } from './types';

describe('AddToCartButton', () => {
  it('should render the add to cart button', () => {
    const mockProps: ButtonProps = {
      movieId: 1, 
      count: 1,
      addToCart: () => {}, 
    };

    const wrapper = render(<Button {...mockProps} />);
    wrapper.debug();
  });
});
