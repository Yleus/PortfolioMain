import React from 'react';

import { Container, Image } from './styles';
import image from '../../images/elephant.png'

const Store: React.FC = () => {
  return (
    <Container>
    <h2>SORRY</h2>
    <h3>This page is being developed.</h3>
    <Image>
      <img src={image} alt="Dog image" />
    </Image>

    <h4>For more information, send my a e-mail.</h4>
  </Container>
);
}

export default Store;
