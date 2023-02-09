import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, TopSide, MenuButtons, BotSide, Avatar, ProfileData, HomeIcon, UserIcon, AlienIcon, StoreIcon, SearchIcon, ExitIcon,   } from './styles';
import Logo from '../Logo';

const MenuBar: React.FC = () => {
  return (
    <Container>

        <TopSide>
            <Logo />
            <NavLink to="/PortfolioMain/"  >
              <MenuButtons>
                  <HomeIcon />
                  <span>Home</span>
              </MenuButtons>
            </NavLink>
            <NavLink to="/PortfolioMain/profile">
              <MenuButtons>
                <UserIcon />
                  <span>Profile</span>
              </MenuButtons>
            </NavLink>
            <NavLink to="/PortfolioMain/ia">
              <MenuButtons>
                  <AlienIcon />
                  <span>I.A</span>
              </MenuButtons>
            </NavLink>
            <NavLink to="/PortfolioMain/store">
              <MenuButtons>
                  <StoreIcon />
                  <span>Store</span>
              </MenuButtons>
            </NavLink>
            {/* <MenuButtons>
                <SearchIcon />
                <span>Search</span>
            </MenuButtons> */}
        </TopSide>

        {/* <BotSide>
            <Avatar />
            <ProfileData>
                <strong>Paulo Henrique</strong>
                <span>@yleusph</span>
            </ProfileData>

            <ExitIcon />
        </BotSide> */}

    </Container>
  );
}

export default MenuBar;
