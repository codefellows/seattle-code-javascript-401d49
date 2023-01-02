# React!

## React Refresher

[React Refresher Github](https://github.com/rkgallaway/react-refresher/blob/main/README.md)
[Deployed Site](https://jocular-marzipan-d44cbf.netlify.app/)

### Review Questions:
1. What is state?
  - data, in a component, that belongs to that component (it can be changed within that component) object -> key value pairs
1. how do you create state in a class component?
  ```javascript
  constructor(props){
    super(props);
    this.state = {
      key: value,
    }
  }
  ```
1. What are props?
  - properties passed from parent to child.  a child component cannot change their props.  passed in ONLY, not upward.  also a POJO.  i.e. props = {callback: () => {}, name: 'Ryan'}
1. Can component props change?
  - if a prop variable contains parent state, that parent state could change, and pass the "changed" prop to the child
1. Can component state change?
  - yes!!!!
1. What React lifecycle method must every component have?
  - render(); (with a return)
1. What React lifecycle method must be used when establishing class component state?
  - constructor();
1. What React lifecycle method would you use to load data on a page without user interaction?
  - componentDidMount();
1. In what order are React lifecycle methods called?
  - constructor, render, componentDidMount
1. can state be passed as props?  If so, what would that look like in code?
  ```javascript
  <Header greeting={this.state.greeting}/>
  ```


