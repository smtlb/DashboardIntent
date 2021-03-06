import React, {Component} from 'react';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <header className="o-header">
      <Logo />
        <h5 className="o-header__title">
          Welcome Back, {this.props.name}!
        </h5>
        <div className="o-header__profile">
          <span>{this.props.initials}</span>
        </div>
      </header>
    );
  }
}

export default Header;
