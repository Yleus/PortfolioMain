import React, { useState } from 'react';

import { Container, Button, ArrowTopIcon, ArrowBotIcon, Description, Wrapper } from './styles';


interface Props {
  icon: React.ReactNode;
  listing: React.ReactNode;
}


const SkillComp: React.FC<Props> = ({icon, listing}) => {
  const [ show, setShow ] = useState(false);

  return (
    <Container>
      <Wrapper>
        {icon}
        <Button onClick={() => setShow(!show)}>
          {show === false ? <ArrowTopIcon/> : <ArrowBotIcon/>}
        </Button>
      </Wrapper>
      {show && <Description>
        <ul>
          {listing}
        </ul>
      </Description>
      }
    </Container>


  );
}

export default SkillComp;

