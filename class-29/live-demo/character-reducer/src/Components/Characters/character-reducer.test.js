import { initialState, characterReducer } from './index';

describe('Character Reducer', () => {
  test('adds and removes characters', () => {
    let state = characterReducer(initialState, {});

    expect(state.name).toEqual('Sesame Street Characters');
    expect(state.characters).toEqual(['Big Bird', 'Mr Aloysius Snuffleupagus', 'Elmo']);

    state = characterReducer(state, {type: 'ADD', payload: 'test'});
    expect(state.characters.includes('test')).toBeTruthy();

    state = characterReducer(state, {type: 'REMOVE', payload: 'test'});
    expect(state.characters.includes('test')).toBeFalsy();

  });
});
