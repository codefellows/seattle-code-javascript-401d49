import { render, screen, fireEvent } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from './App';

const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {name: 'Ryan', age: 39},
        {name: 'Lucky', age: 4},
      ],
  }));
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App Component', () => {
  test('renders learn react link', async () => {
    render(<App />);
  
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');
  
    fireEvent.change(input, {target: {value: '/testGet'}})
    fireEvent.click(button);
    
    const pre = await screen.findByTestId('pre');
    expect(pre).toHaveTextContent('Ryan');
  });
});
