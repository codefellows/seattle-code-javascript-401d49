import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ModeProvider, { ModeContext } from './index';

describe('Mode Context', () => {
  test('provides initial state', () => {
    render(
      <ModeProvider>
        <ModeContext.Consumer>
          {
            ({ mode }) => (
              <>
                <h3 data-testid="mode-test">test: {mode}</h3>
              </>
            )
          }
        </ModeContext.Consumer>
      </ModeProvider>
    );
  
    const h3 = screen.getByTestId('mode-test');
    expect(h3).toHaveTextContent('test: dark');
  });  
});
