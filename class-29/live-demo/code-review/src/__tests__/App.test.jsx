import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import App from '../App';

// from testing docs: https://testing-library.com/docs/react-testing-library/example-intro/#full-example
const server = setupServer(
  rest.get('/getTest', (req, res, ctx) => {
    return res(ctx.json({results: [{ name: 'tester'}, {name: 'testyTest'}]}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App integration', () => {
  test('renders data in the output area', async() => {
    render(<App />);

    let input = screen.getByTestId('form-input');
    fireEvent.change(input, {target: {value: '/getTest'}})
    let button  = screen.getByText('GO!')
    fireEvent.click(button);

    let pre = await screen.findByTestId('results-data');
    expect(pre).toHaveTextContent('tester');
  });
});
