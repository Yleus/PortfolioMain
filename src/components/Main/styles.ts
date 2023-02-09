import styled, { css } from "styled-components";

import { HiHome, RiUser3Fill, GiAlienFire, MdOutlineLocalGroceryStore, FiSearch } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid ${props => props.theme.colors.secundary};
        border-right: 1px solid ${props => props.theme.colors.secundary};
    }




`;

export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;


    padding: 8px 8px 9px 13px;

`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h1 {
        margin-left: 8px;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.textSecundary};

`;


export const HeaderRight = styled.div``;

const iconCSS = css`
    width: 32px;
    height: 32px;
    fill:${props => props.theme.colors.textSecundary};
    opacity: 0.4;
    border-top: 2px solid transparent;



    padding-top: 8px;
    cursor: pointer;

    &:hover,
    &:focus
     {
        opacity: 1;
        border-top: 2px solid ${props => props.theme.colors.textSecundary};
    }





`;


export const HomeIcon = styled(HiHome)`
    ${iconCSS}
`;

export const UserIcon = styled(RiUser3Fill)`
    ${iconCSS}
`;

export const AlienIcon = styled(GiAlienFire)`
    ${iconCSS}
`;

export const StoreIcon = styled(MdOutlineLocalGroceryStore)`
    ${iconCSS}
`;

export const SearchIcon = styled(FiSearch)`
    ${iconCSS}
`;



export const BottomMenu = styled.div`

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background: ${props => props.theme.colors.primary};
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0px min(46px, max(10vw, 10px)) 8px;

    @media (min-width: 500px) {
        display: none;

    }

    .active {
      >svg {
        opacity: 1;
      }

      border-top: 2px solid ${props => props.theme.colors.textSecundary};
    }


`;


export const Page = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.background};

    max-width: 100%;
    overflow-y: auto;

    scrollbar-width: none; /** FireFox */
    ::-webkit-scrollbar { /** Chrome */
        display: none;
    }


`;
