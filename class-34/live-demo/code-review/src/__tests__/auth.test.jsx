import '@testing-library/jest-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import Auth from '../Components/Auth';
import Login from '../Components/Login';
import AuthProvider, { AuthContext} from '../Context/Auth';

describe('Auth integration', () => {
  test('contains initial user and isLoggedIn values', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({isLoggedIn, user}) => (
              <>
                <p data-testid="isLoggedIn">{isLoggedIn.toString()}</p>
                <p data-testid="userObject">{typeof(user)}</p>
                <p data-testid="userKeys">{Object.keys(user).length}</p>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const isLoggedInP = screen.getByTestId('isLoggedIn');
    const userObjectP = screen.getByTestId('userObject');
    const userKeysP = screen.getByTestId('userKeys');

    expect(isLoggedInP).toHaveTextContent('false');
    expect(userObjectP).toHaveTextContent('object');
    expect(userKeysP).toHaveTextContent(0);      
  })
})
