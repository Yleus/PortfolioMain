import React, { useContext } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { Container, Header, HomeIcon, UserIcon, AlienIcon, StoreIcon, BottomMenu, Page, HeaderRight, HeaderLeft } from './styles';
import { shade } from 'polished';



//Components
import Banner from '../Banner'
import Avatar from '../Avatar'

// import SwitchMode from '../SwitchMode';

// Pages
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import IA from '../../pages/IA';
import Store from '../../pages/Store';


import Switch from 'react-switch';
import About from '../../pages/Home/About';
import Portfolio from '../../pages/Home/Portfolio';
import Languages from '../../pages/Home/Skills';
import Utilities from '../../pages/Home/Utilities';


interface Props {
  toggleTheme() : void;
}

const Main: React.FC<Props> = ({ toggleTheme}) => {
  const { colors, title} = useContext(ThemeContext);


  return (
    <Container>
        <Header>
          <HeaderLeft>
            <Avatar />
            <h1>Hello!</h1>
          </HeaderLeft>
          <HeaderRight>
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={10}
              offHandleColor={'#000'}
              offColor={shade(0.15, colors.primary)}
              onColor={colors.secundary}
            />
          </HeaderRight>
        </Header>



        <Page >
          <Banner />
            <Routes>
              <Route path="/PortfolioMain/*" element={<Home />}>
                <Route path="/PortfolioMain/*" element={<About />} />
                <Route path="/PortfolioMain/*portfolio" element={<Portfolio />}/>
                <Route path="/PortfolioMain/*languages" element={<Languages />}/>
                <Route path="/PortfolioMain/*utilities" element={<Utilities />}/>
              </Route>
              <Route path="/PortfolioMain/profile" element={<Profile />}></Route>
              <Route path="/PortfolioMain/ia" element={<IA />}></Route>
              <Route path="/PortfolioMain/store" element={<Store />}></Route>
            </Routes>
        </Page>


        <BottomMenu>
          <NavLink to="/PortfolioMain/"><HomeIcon /></NavLink>
          <NavLink to="/PortfolioMain/profile"><UserIcon /></NavLink>
          <NavLink to="/PortfolioMain/ia"><AlienIcon /></NavLink>
          <NavLink to="/PortfolioMain/store"><StoreIcon /></NavLink>
        </BottomMenu>


    </Container>
  );
}

export default Main;
