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
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="navbar-item-logo" src={logo} width="112" height="28" />
          </Link>

          <a role="button" onClick={this.navbarHandler} className="navbar-toggler navbar-burger burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={this.state.navbarOpen?`navbar-menu is-active`:`navbar-menu`}>
          <div className="navbar-start">
            {/* <ul> */}
              { this.state.links.map((link)=>{
                return (
              <div key={link.id}>
                <Link to={link.path} className="navbar-item">
                  {link.text}
                </Link>
              </div>

              )
              })}
            {/* </ul> */}

          </div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Cart
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Item 1
              </a>
                <a className="navbar-item">
                  Item 2
              </a>
                <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
              </a> 
                </div> {/* navbar-dropdown */}
              </div> {/* has-dropdown is-hoverable  */}
            </div> {/* navbar-end  */}

            
          </div>
        
      </nav>
    );
  }
}

export default Navbar;