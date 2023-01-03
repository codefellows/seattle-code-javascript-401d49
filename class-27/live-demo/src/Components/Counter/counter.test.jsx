import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';

import Counter from './index';

describe('Counter test', () => {
  test('counts as expected', () => {
    render(<Counter />);

    // get elements form the "rendered" component
    const button = screen.getByTestId('counter-button');
    const counterH2 = screen.getByTestId('counter-clicks');
    const factorH2 = screen.getByTestId('counter-factor');

    //mimic click event
    fireEvent.click(button);

    expect(counterH2).toHaveTextContent(1);
    expect(factorH2).toHaveTextContent('false');
  });
  test('renders factorOfFive as expected', () => {
    render(<Counter />);

    // get elements form the "rendered" component
    const button = screen.getByTestId('counter-button');
    const counterH2 = screen.getByTestId('counter-clicks');
    const factorH2 = screen.getByTestId('counter-factor');

    expect(counterH2).toHaveTextContent(0);
    expect(factorH2).toHaveTextContent('false');

    for (let i = 1; i < 42; i++){
      //mimic click event
      fireEvent.click(button);
      expect(counterH2).toHaveTextContent(`Button has been clicked ${i} time(s)`);

      let expected = i %  5 === 0 ? 'true' : 'false'
      expect(factorH2).toHaveTextContent(expected);
    }

  });
});
