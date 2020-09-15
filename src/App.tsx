import React from 'react';
import Container from './components/Container';
import './style/custom.css';
import './style/tailwind.output.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Navmenu from './components/Navmenu';
import NavItem from './components/NavItem';

function App() {
  return (
    <Container>
      <Navbar>
        <Logo />
        <Navmenu>
          <NavItem>Women</NavItem>
          <NavItem>Men</NavItem>
          <NavItem>Children</NavItem>
        </Navmenu>
      </Navbar>
    </Container>
  );
}

export default App;
