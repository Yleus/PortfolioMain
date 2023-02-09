import styled, { css } from "styled-components";

import { HiHome, RiUser3Fill, GiAlienFire, MdOutlineLocalGroceryStore, FiSearch, MdLightMode, MdModeNight, BsArrowReturnRight } from '../../styles/icons'

import image from '../../images/logo.png';

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        background: ${props => props.theme.colors.primary};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;



        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 0px 20px;

        max-height: 100vh;

        overflow-y: auto;

    }










`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;




    @media (min-width: 1280) {
        align-items: flex-start;
    }

    >a {
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
      text-decoration: none;




      &:last-of-type {
        margin-bottom:20px;
      }
    }


    .active {

      border-radius: 20px;
      background: ${props => props.theme.colors.formBg};
         svg {

          color: ${props => props.theme.colors.textActive};
        }
         span {

          color: ${props => props.theme.colors.textActive};
        }
    }




`;

export const Logo = styled.div`
    width: 80px;
    height: 80px;
    background-image: url('../../images/logo.png');
    background-size: cover;

    @media (max-width: 1280px){
      width: 60px;
      height: 60px;
    }


`;



export const MenuButtons = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: ${props => props.theme.colors.textPrimary};

    border-radius: 20px;
    width: 100%;





    &:hover
     {

        color: ${props => props.theme.colors.textActive};
        background: ${props => props.theme.colors.formBg};
    }



    > span {
        display: none;
    }


    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 1.5rem;
        }

        padding-right: 15px;
    }

    padding: 8.25px 15px;
    outline: 0;

    & + button {
        margin-top: 16px;

    }

    cursor: pointer;




`;

const iconCSS = css `
    flex-shrink: 0;

    width: 30px;
    height: 30px;


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



export const BotSide = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: center;
    padding: 16px;
`;

export const Avatar = styled.div`
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;


    flex-shrink: 0;

    border-radius: 50%;
    background: ${props => props.theme.colors.border};

    > h6 {
        color: ${props => props.theme.colors.textPrimary};
    }
`;

export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;

        margin-left: 10px;
        font-size: 1.4rem;

        > span {
            font-weight: normal;
            color: grey;
        }
    }
`;


export const ExitIcon = styled(BsArrowReturnRight)`
    display: none;

    @media (min-width: 1280px) {

        display: inline-block;
        width: 25px;
        height: 25px;
        color: ${props => props.theme.colors.textPrimary};
        opacity: 0.6;
        padding-left : 10px ;

        cursor: pointer;

        &:hover {
            opacity: 1;
        }



    }
`;

