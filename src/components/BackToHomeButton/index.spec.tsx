import { render, screen } from '@testing-library/react';
import { BackToHomeButton } from './index';
import '@testing-library/jest-dom';



describe('BackToHomeButton', () => {
  it('should render the BackToHomeButton', () => {
    const childrenContent = 'Go Home';

    render(<BackToHomeButton>{childrenContent}</BackToHomeButton>);

 
    const buttonElement = screen.getByText(childrenContent);
    expect(buttonElement).toBeInTheDocument();
  });
});
