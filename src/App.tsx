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
import ProductPage from './components/ProductPage';
import Carousel from './components/Carousel';
import Details from './components/Details';

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
      <CategoryBar trail={['home', 'men', 'sneaker']} />
      <ProductPage>
        <Carousel
          images={[
            'https://www.dogostore.com/images/thumbs/0012583_lost-in-space.jpg',
            'https://www.dogostore.com/images/thumbs/0012582_lost-in-space.jpg',
            'https://www.dogostore.com/images/thumbs/0012584_lost-in-space.jpg',
          ]}
        />
        <Details
          product={{
            productId: 'dgsnk016-003',
            title: 'Lost In Space',
            seller: 'DOGO Store',
            availableSizes: [41, 42, 43],
          }}
        />
      </ProductPage>
    </Container>
  );
}

export default App;
