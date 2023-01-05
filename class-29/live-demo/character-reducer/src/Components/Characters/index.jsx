import { useReducer, useState } from 'react';

export const initialState = {
  name: 'Sesame Street Characters',
  characters: ['Big Bird', 'Mr Aloysius Snuffleupagus', 'Elmo']
};

// example payload:
// {
//   type: 'ADD'
//   payload: 'Cookie Monster' 
// }
// result of an add:
// characters:  ['Big Bird', 'Mr Aloysius Snuffleupagus', 'Elmo', 'Cookie Monster']


// let objOne = {name: 'Ryan'}
// let objTwo = objOne;

// objOne.age = 48;

export const characterReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD':
      return {...state, characters: [...state.characters, action.payload]};
    case 'REMOVE':
      return {...state, characters: state.characters.filter(char => char !== action.payload)};
    default:
      return state;
  }
};

const Characters = () => {
  const [input, setInput] = useState('');

  const [state, dispatch] = useReducer(characterReducer, initialState);
  // console.log(state);

  const addCharacter = () => {
    let action = {
      type: 'ADD',
      payload: input,
    }
    dispatch(action);
  }

  const removeCharacter = () => {
    let action = {
      type: 'REMOVE',
      payload: input,
    }
    dispatch(action);
  }

  return (
    <>
      <h1>{state.name}</h1>
      <label>Character Name:
        <input onChange={(e) => setInput(e.target.value)}/>
        <button onClick={addCharacter}>Add Character</button>
        <button onClick={removeCharacter}>Remove Character</button>
      </label>

      <ul>
        {
          state.characters.map((character, index) => (
            <li key={`character-${index}`}>{character}</li>
          ))
        }
      </ul>
    </>
  )
};

export default Characters;
