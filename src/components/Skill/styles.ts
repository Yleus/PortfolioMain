import styled, { css } from "styled-components";

import { MdArrowDropUp, MdArrowDropDown } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  margin: 10px;
`;


export const Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
  height: 120px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.textSecundary};
  border-radius: 4px 4px 0 0;

  & >svg  {
    fill: ${props => props.theme.colors.textSecundary};
    width: 54px;
    height: 54px;
  }


  position: relative;


`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textSecundary};

`;

export const ArrowTopIcon = styled(MdArrowDropUp)`
  ${iconCSS}
`;

export const ArrowBotIcon = styled(MdArrowDropDown)`
  ${iconCSS}
`;

export const Description = styled.div`
  display: block;

  color: ${props => props.theme.colors.textSecundary};
  width: 100%;



  & ul {

    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.textSecundary}
    list-style-position: inside;
    list-style-type: "- ";
    padding-left: 20px;
    border-radius: 0 0 4px 4px ;
    border-bottom: 2px solid ${props => props.theme.colors.textSecundary};
    border-left: 2px solid ${props => props.theme.colors.textSecundary};
    border-right: 2px solid ${props => props.theme.colors.textSecundary};

    & li {
      margin-top: 4px;
      font-size: 1.2rem;

      @media (max-width: 600px) {
        font-size: 1rem;
      }

      &:last-child {
        margin-bottom: 4px;
      }
    }
  }



`;

