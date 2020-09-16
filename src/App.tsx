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
import { CarouselProvider, Slide, Slider, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
      <ProductPage>
        {/* In production, I would get trail property from history from React Router */}
        <CategoryBar trail={['home', 'men', 'sneaker']} />
        <CarouselProvider naturalSlideWidth={10} naturalSlideHeight={10} totalSlides={3}>
          <Slider className="rounded-xl sm:w-full md:w-7/12 shadow-2xl mt-4">
            <Slide index={0} className="flex items-center">
              <img
                src="https://www.dogostore.com/images/thumbs/0012583_lost-in-space.jpg"
                alt=""
                className="object-contain w-full h-full inline-block"
              />
            </Slide>
            <Slide index={1} className="flex items-center">
              <img
                src="https://www.dogostore.com/images/thumbs/0012582_lost-in-space.jpg"
                alt=""
                className="object-contain w-full h-full inline-block"
              />
            </Slide>
            <Slide index={2}>
              <img
                src="https://www.dogostore.com/images/thumbs/0012584_lost-in-space.jpg"
                alt=""
                className="object-contain w-full h-full inline-block"
              />
            </Slide>
          </Slider>
          <div className="flex justify-between sm:w-full md:w-7/12">
            <Dot slide={0} className="mt-8 w-40 h-40 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://www.dogostore.com/images/thumbs/0012583_lost-in-space.jpg"
                alt=""
                className="w-full"
              />
            </Dot>
            <Dot slide={1} className="mt-8 w-40 h-40 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://www.dogostore.com/images/thumbs/0012582_lost-in-space.jpg"
                alt=""
                className="w-full"
              />
            </Dot>
            <Dot slide={2} className="mt-8 w-40 h-40 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://www.dogostore.com/images/thumbs/0012584_lost-in-space.jpg"
                alt=""
                className="w-full"
              />
            </Dot>
          </div>
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
      </ProductPage>
    </Container>
  );
}

export default App;
