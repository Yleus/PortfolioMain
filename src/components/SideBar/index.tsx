import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List'
import { Container, Body } from './styles';




const SideBar: React.FC = () => {

  return (
    <Container>
      <StickyBox>
        <Body>
          <List title="Last Tech News" ></List>
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
