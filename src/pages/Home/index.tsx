import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { Container, Menu } from './styles';

import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Utilities from './Utilities';

const Home: React.FC = () => {
  return (
    <Container>

      <Menu>
        <NavLink to="/PortfolioMain/">About</NavLink>
        <NavLink to="/PortfolioMain/portfolio">Portfolio</NavLink>
        <NavLink to="/PortfolioMain/skills">Skills</NavLink>
        <NavLink to="/PortfolioMain/utilities">Utilities</NavLink>
      </Menu>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/utilities" element={<Utilities />}/>
      </Routes>


    </Container>

    );
}

export default Home;


