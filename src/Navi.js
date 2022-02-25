import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./cartSummary";

export default class Navi extends Component {
  render() {
    return (
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Nortwind App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/form1">Form Demo 1</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/form2">Form Demo 2</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary
              removeFromCart={this.props.removeFromCart}
              cart={this.props.cart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
