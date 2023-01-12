import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SettingsProvider, { SettingsContext } from './index';

describe('Settings Context', () => {
  test('initial state loads as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({showComplete, pageItems, sort}) => (
              <ul>
                <li data-testid="show-complete">{showComplete.toString()}</li>
                <li data-testid="page-items">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
              </ul>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    let completedLi = screen.getByTestId('show-complete');
    let pageItemLi = screen.getByTestId('page-items');
    let sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent('false');
    expect(pageItemLi).toHaveTextContent('3');
    expect(sortLi).toHaveTextContent('difficulty');

  })
})
