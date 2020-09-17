import React from 'react';
import CategoryBar from '../components/CategoryBar';
import ProductPage from '../components/ProductPage';
import Carousel from '../components/Carousel';
import Details from '../components/Details';
import Container from '../components/Container';
import Comment from '../components/Comment';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';

const ProductDetails: React.FC = () => {
  // Mock data
  const product = {
    id: 'dgsnk016-003',
    name: 'Lost In Space',
    seller: 'DOGO Store',
    availableSizes: [41, 42, 43],
    images: [
      'https://www.dogostore.com/images/thumbs/0012583_lost-in-space.jpg',
      'https://www.dogostore.com/images/thumbs/0012582_lost-in-space.jpg',
      'https://www.dogostore.com/images/thumbs/0012584_lost-in-space.jpg',
    ],
    price: 419.99,
    discount: { rate: 33, price: 219.99 },
  };

  const comments = [
    {
      name: 'Austen Atkinson',
      title: 'Morbi sed lectus mollis',
      points: 9,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tortor id urna consectetur sollicitudin. Quisque gravida blandit tempus. Fusce convallis gravida arcu sed sagittis. Curabitur augue leo, egestas vitae pretium convallis, ultricies eu erat. Vestibulum sed lorem venenatis, dapibus arcu et, vehicula orci.',
      image: 'https://randomuser.me/api/portraits/women/46.jpg',
    },
    {
      name: 'Maria King',
      title: 'Vestibulum et egestas eros',
      points: 7,
      content:
        'Aenean laoreet, massa non suscipit dignissim, nunc lacus euismod metus, posuere dignissim velit magna at ipsum. Duis id dolor condimentum urna pulvinar commodo. Ut tempor mi at elit molestie euismod. Phasellus tempus, ante nec commodo consequat, nisi justo placerat mauris, vel ultricies risus lectus quis massa.',
      image: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
  ];

  return (
    <>
      <Container center>
        <Layout>
          {/* In production, I would get trail property from history from React Router */}
          <CategoryBar trail={['home', 'men', 'sneaker']} />
          <ProductPage>
            <Carousel images={product.images} />
            <Details product={product} />
          </ProductPage>
        </Layout>
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
          {/* Render comments */}
          {comments.map((comment, i) => {
            return <Comment key={`comment-${i}`} comment={comment} />;
          })}
        </Container>
        <Container className="flex-start md:rounded-tl-xl" nomargin style={{ flexBasis: '59%' }}>
          <h3 className="font-bold text-xl pb-3 mb-2 border-b-2">Description</h3>
          {/* In real world we'd probably source a markdown file, so why not here too */}
          <Markdown source="**Lorem ipsum** *dolor* sit amet, consectetur adipiscing elit. Nunc tempor tellus ac placerat scelerisque. Etiam sollicitudin velit lacus, at rhoncus felis pellentesque in." />
        </Container>
      </Container>
    </>
  );
};

export default ProductDetails;
