import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from './App';

// from testinglibrary docs:  https://testing-library.com/docs/react-testing-library/example-intro/#full-example
const server = setupServer(
  rest.get('/getTest', (req, res, ctx) => {
    return res(ctx.json({results: [
      {name: 'Ryan', age: 48},
      {name: 'Lucky', age: 4},
    ]}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders learn react link', async () => {
  render(<App />);

  const input = screen.getByTestId('input');
  const button = screen.getByTestId('button');

  fireEvent.change(input, {target: {value: '/getTest'}});
  fireEvent.click(button)
  
  const pre = await screen.findByTestId('app-data');
  expect(pre).toHaveTextContent('banana');
});
