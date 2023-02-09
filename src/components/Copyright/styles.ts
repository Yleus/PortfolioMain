import styled, { css } from "styled-components";

import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineGithub } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: ${props => props.theme.colors.textSecundary}
  }

  @media (max-width: 500px) {
    padding-bottom: 40px;

    & p {
      font-size: 0.8rem;
    }
  }
`;


export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;


const iconCSS = css `
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.textSecundary};

`;

export const GitHubIcon = styled(AiOutlineGithub)`
    ${iconCSS}

    &:hover {
      color: #6B5B84;
    }
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
    ${iconCSS}

    &:hover {
      color: #0A66C2;
    }
`;

export const YoutubeIcon = styled(AiFillYoutube)`
    ${iconCSS}

    &:hover {
      color: #FF0000;
    }
`;

export const InstagramIcon = styled(AiFillInstagram)`
    ${iconCSS}

    &:hover {
      color: #FF0066;
    }
`;

