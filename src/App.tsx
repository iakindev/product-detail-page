import React from 'react';
import MainContainer from './components/MainContainer';
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
import Container from './components/Container';
import Comment from './components/Comment';

function App() {
  return (
    <MainContainer>
      <Container center>
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
          {/* I have manually added ml-6 here. Because initially this component was in Navmenu
but Navmenu has overflow-hidden css. So it was blocking this component's shadow. */}
          <Profile className="ml-6 hidden md:inline-block " />
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

      <Container
        className="flex flex-col-reverse md:flex-row md:flex-wrap justify-between mt-0 md:mt-5 lg:mt-0 xl:mt-0"
        center
        nobg
        nopadding
      >
        <Container
          nomargin
          className="flex flex-col gap-6 md:rounded-tr-xl"
          style={{ flexBasis: '39%' }}
        >
          <Comment
            comment={{
              name: 'Austen Atkinson',
              title: 'Title',
              point: 9,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tortor id urna consectetur sollicitudin. Quisque gravida blandit tempus. Fusce convallis gravida arcu sed sagittis. Curabitur augue leo, egestas vitae pretium convallis, ultricies eu erat. Vestibulum sed lorem venenatis, dapibus arcu et, vehicula orci.',
            }}
          />
          <Comment
            comment={{
              name: 'Maria King',
              title: 'Title',
              point: 7,
              content:
                'Aenean laoreet, massa non suscipit dignissim, nunc lacus euismod metus, posuere dignissim velit magna at ipsum. Duis id dolor condimentum urna pulvinar commodo. Ut tempor mi at elit molestie euismod. Phasellus tempus, ante nec commodo consequat, nisi justo placerat mauris, vel ultricies risus lectus quis massa.',
            }}
          />
        </Container>
        <Container className="flex-start md:rounded-tl-xl" nomargin style={{ flexBasis: '59%' }}>
          Description will come here
        </Container>
      </Container>
    </MainContainer>
  );
}

export default App;
