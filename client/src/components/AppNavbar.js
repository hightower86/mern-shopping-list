import React, { Component } from 'react';
import {
  Collapse,
  // Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

export default class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          {/* <Container> */}
          <NavbarBrand href='/'>ShoppingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}
