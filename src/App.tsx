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
import CategoryBar from './components/CategoryBar';

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
          {/* In production, I would get count property initialy from API, 
          propably with seperate Auth component which would fetch User from API and
          store the User in Context API or Redux Store */}
          <Cart count={0} />
        </Navmenu>
        <Profile />
      </Navbar>
      {/* In production, I would get trail property from history from React Router */}
      <CategoryBar trail={['home', 'test']} />
    </Container>
  );
}

export default App;
