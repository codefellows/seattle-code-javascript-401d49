import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';

import Welcome from './index';

describe('Welcome Component', () => {
  test('loads and displays initial state as expected', () => {
    render(<Welcome />);

    const h1 = screen.getByTestId('welcome-h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Welcome World');
  });
  test('changes state appropriately', () => {
    render(<Welcome />);

    const input = screen.getByTestId('welcome-input');
    fireEvent.change(input, {target: {value: 'Ryan'}});
    const h1 = screen.getByTestId('welcome-h1');

    expect(h1).toHaveTextContent('Welcome Ryan');
  });
});
