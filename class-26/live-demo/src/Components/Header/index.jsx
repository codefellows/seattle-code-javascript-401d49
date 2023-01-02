import React from 'react';
import './styles.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1 data-testid="header-h1">Hello {this.props.greeting}</h1>
      </>
    );
  }
}

export default Header;
