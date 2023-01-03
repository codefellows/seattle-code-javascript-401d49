# The useState() Hook

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/GujYx1Eao)

## Array Destructuring

[array Destructuring repl](https://replit.com/@rkgallaway/array-destructuring#index.js)

## Hooks

What is a "Hook"?  A function.

> Hooks are functions that let you “hook into” React state and lifecycle features from function components.  The `useState()` hook is what we'll focus on today

Using state in class components:
```javascript
  constructor(props){
    super(props);
    this.state = {
      name: 'Ryan',
    }
  }
  ```

using state in function components
```javascript
const [name, setName] = useState('Ryan');
const [pet, setPet] = useState('Lucky');
```

useState returns two pieces.  The first is the state variable.  The second is the "mechanism" or function that allows us to change the state variable.
