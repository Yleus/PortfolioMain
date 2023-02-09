import React from 'react';

import { Container } from './styles';
import logoimg from '../../images/logo.png'

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={logoimg} alt="" />
    </Container>
);
}

export default Logo;
