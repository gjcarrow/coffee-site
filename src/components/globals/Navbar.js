import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from "../../images/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";

class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
    links: [
      {
        id: 1,
        path: '/',
        text: 'home'
      },
      {
        id: 2,
        path: '/about',
        text: 'about'
      },
    ]
  }

  navbarHandler = ()=>{
    console.log('Hello from navbar')
    this.state.navbarOpen?this.setState({
      navbarOpen:false}):this.setState({navbarOpen:true})
  }

  render() {

    
    return (
      <nav className="navbar text-capitalize">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="navbar-item-logo" src={logo} width="112" height="28" alt="coffee cup logo" />
          </Link>

          <a role="button" onClick={this.navbarHandler} className="navbar-toggler navbar-burger burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={this.state.navbarOpen?`navbar-menu is-active`:`navbar-menu`}>
          <div className="navbar-start">
            {this.state.links.map((link) => {
              return (
                <div key={link.id}>
                  <Link to={link.path} className="navbar-item">
                    {link.text}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="navbar-end">
            <a className="navbar-item">
              <FaCartArrowDown className="cart-icon" />
            </a>
          </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;