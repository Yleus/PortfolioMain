import React from 'react';

import { Container, Contact, GitHubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon  } from './styles';

const Copyright: React.FC = () => {
  return (
    <Container>
      <p>Developed by Paulo H S Gabriel</p>
      <p>Copyright © 2023</p>
      <Contact>
        <a href="https://github.com/Yleus" target="_blank"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/paulohgabriel/" target="_blank"><LinkedinIcon /></a>
        <a href="https://www.youtube.com/channel/UCbaHHnOIq9-8PNMDZXCulrQ" target="_blank"><YoutubeIcon /></a>
        <a href="https://www.instagram.com/yleusph/" target="_blank"><InstagramIcon /></a>
      </Contact>
    </Container>
  );
}

export default Copyright;
