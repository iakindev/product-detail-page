import React from 'react';
import Container from './components/Container';
import './style/custom.css';
import './style/tailwind.output.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Navmenu from './components/Navmenu';
import NavItem from './components/NavItem';
import Searchbar from './components/Searchbar';
import Cart from './components/Cart';
import Profile from './components/Profile';

function App() {
  return (
    <Container>
      <Navbar>
        <Logo />
        <Navmenu>
          <NavItem>Women</NavItem>
          <NavItem>Men</NavItem>
          <NavItem>Children</NavItem>
          <Searchbar />
          <Cart count={0} />
        </Navmenu>
        <Profile />
      </Navbar>
    </Container>
  );
}

export default App;
