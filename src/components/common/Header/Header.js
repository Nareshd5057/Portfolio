import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import style from './Header.module.css';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousScrollY: 0,
      headerClasses: [],
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc

    if (this.state.previousScrollY < window.scrollY) {
      this.setState({
        headerClasses: ['headspace--hidden'],
      });
      console.log('if' + window.scrollY);
      console.log('if' + this.state.previousScrollY);
    } else {
      this.setState({
        headerClasses: ['navbar', 'activated'],
      });
      console.log('else' + window.scrollY);
      console.log('else' + this.state.previousScrollY);
    }
    this.setState({
      previousScrollY: window.scrollY,
    });
  }
  render() {
    return (
      <div className="appp">
        <Navbar expand="md" className={this.state.headerClasses.join('')}>
          <NavbarBrand href="/" className="mainLogo">
            <svg
              width="180"
              height="40"
              viewBox="0 0 306 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6 49.26L0.42 36L12.6 22.74H25.5L13.26 36L25.5 49.26H12.6ZM276.657 -2.86102e-06L260.577 68.22H250.677L266.757 -2.86102e-06H276.657ZM280.711 22.74H293.611L305.791 36L293.611 49.26H280.711L292.951 36L280.711 22.74Z"
                fill="#00BFBF"
              />
              <path
                d="M71.1135 57H60.8535L43.6935 31.02V57H33.4335V14.88H43.6935L60.8535 40.98V14.88H71.1135V57ZM76.1774 40.2C76.1774 36.76 76.8174 33.74 78.0974 31.14C79.4174 28.54 81.1974 26.54 83.4374 25.14C85.6774 23.74 88.1774 23.04 90.9374 23.04C93.2974 23.04 95.3574 23.52 97.1174 24.48C98.9174 25.44 100.297 26.7 101.257 28.26V23.52H111.517V57H101.257V52.26C100.257 53.82 98.8574 55.08 97.0574 56.04C95.2974 57 93.2374 57.48 90.8774 57.48C88.1574 57.48 85.6774 56.78 83.4374 55.38C81.1974 53.94 79.4174 51.92 78.0974 49.32C76.8174 46.68 76.1774 43.64 76.1774 40.2ZM101.257 40.26C101.257 37.7 100.537 35.68 99.0974 34.2C97.6974 32.72 95.9774 31.98 93.9374 31.98C91.8974 31.98 90.1574 32.72 88.7174 34.2C87.3174 35.64 86.6174 37.64 86.6174 40.2C86.6174 42.76 87.3174 44.8 88.7174 46.32C90.1574 47.8 91.8974 48.54 93.9374 48.54C95.9774 48.54 97.6974 47.8 99.0974 46.32C100.537 44.84 101.257 42.82 101.257 40.26ZM128.867 29.1C130.067 27.26 131.567 25.82 133.367 24.78C135.167 23.7 137.167 23.16 139.367 23.16V34.02H136.547C133.987 34.02 132.067 34.58 130.787 35.7C129.507 36.78 128.867 38.7 128.867 41.46V57H118.607V23.52H128.867V29.1ZM175.497 39.72C175.497 40.68 175.437 41.68 175.317 42.72H152.097C152.257 44.8 152.917 46.4 154.077 47.52C155.277 48.6 156.737 49.14 158.457 49.14C161.017 49.14 162.797 48.06 163.797 45.9H174.717C174.157 48.1 173.137 50.08 171.657 51.84C170.217 53.6 168.397 54.98 166.197 55.98C163.997 56.98 161.537 57.48 158.817 57.48C155.537 57.48 152.617 56.78 150.057 55.38C147.497 53.98 145.497 51.98 144.057 49.38C142.617 46.78 141.897 43.74 141.897 40.26C141.897 36.78 142.597 33.74 143.997 31.14C145.437 28.54 147.437 26.54 149.997 25.14C152.557 23.74 155.497 23.04 158.817 23.04C162.057 23.04 164.937 23.72 167.457 25.08C169.977 26.44 171.937 28.38 173.337 30.9C174.777 33.42 175.497 36.36 175.497 39.72ZM164.997 37.02C164.997 35.26 164.397 33.86 163.197 32.82C161.997 31.78 160.497 31.26 158.697 31.26C156.977 31.26 155.517 31.76 154.317 32.76C153.157 33.76 152.437 35.18 152.157 37.02H164.997ZM194.197 57.48C191.277 57.48 188.677 56.98 186.397 55.98C184.117 54.98 182.317 53.62 180.997 51.9C179.677 50.14 178.937 48.18 178.777 46.02H188.917C189.037 47.18 189.577 48.12 190.537 48.84C191.497 49.56 192.677 49.92 194.077 49.92C195.357 49.92 196.337 49.68 197.017 49.2C197.737 48.68 198.097 48.02 198.097 47.22C198.097 46.26 197.597 45.56 196.597 45.12C195.597 44.64 193.977 44.12 191.737 43.56C189.337 43 187.337 42.42 185.737 41.82C184.137 41.18 182.757 40.2 181.597 38.88C180.437 37.52 179.857 35.7 179.857 33.42C179.857 31.5 180.377 29.76 181.417 28.2C182.497 26.6 184.057 25.34 186.097 24.42C188.177 23.5 190.637 23.04 193.477 23.04C197.677 23.04 200.977 24.08 203.377 26.16C205.817 28.24 207.217 31 207.577 34.44H198.097C197.937 33.28 197.417 32.36 196.537 31.68C195.697 31 194.577 30.66 193.177 30.66C191.977 30.66 191.057 30.9 190.417 31.38C189.777 31.82 189.457 32.44 189.457 33.24C189.457 34.2 189.957 34.92 190.957 35.4C191.997 35.88 193.597 36.36 195.757 36.84C198.237 37.48 200.257 38.12 201.817 38.76C203.377 39.36 204.737 40.36 205.897 41.76C207.097 43.12 207.717 44.96 207.757 47.28C207.757 49.24 207.197 51 206.077 52.56C204.997 54.08 203.417 55.28 201.337 56.16C199.297 57.04 196.917 57.48 194.197 57.48ZM234.28 23.16C238.12 23.16 241.2 24.44 243.52 27C245.84 29.52 247 33 247 37.44V57H236.8V38.82C236.8 36.58 236.22 34.84 235.06 33.6C233.9 32.36 232.34 31.74 230.38 31.74C228.42 31.74 226.86 32.36 225.7 33.6C224.54 34.84 223.96 36.58 223.96 38.82V57H213.7V12.6H223.96V28.02C225 26.54 226.42 25.36 228.22 24.48C230.02 23.6 232.04 23.16 234.28 23.16Z"
                fill="white"
              />
            </svg>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>

            <NavbarText className="mainLink">
              <a href="#">Skills &#47;&gt;</a>
            </NavbarText>
            <NavbarText className="mainLink">
              <a href="#">Project &#47;&gt;</a>
            </NavbarText>
            <NavbarText className="mainLink">
              <a href="#">Resume &#47;&gt;</a>
            </NavbarText>
            <NavbarText className="mainLink">
              <a href="#">Contact &#47;&gt;</a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
