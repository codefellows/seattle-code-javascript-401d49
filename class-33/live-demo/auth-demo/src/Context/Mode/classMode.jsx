import React from 'react';

export const ModeContext = React.createContext();

class ModeProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'light',
    }
  }

  render(){
    return(
      <ModeContext.Provider value={this.state}>
        {this.props.children}
      </ModeContext.Provider>
    )
  }

}

export default ModeProvider;
