import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('renders as expected', () => {
    render(<Footer />);

    let footer = screen.getByTestId('footer');
    
    expect(footer).toHaveTextContent('CodeFellows');
    expect(footer).toBeInTheDocument();
  });
});
