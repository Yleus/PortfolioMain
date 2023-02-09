import styled, { css } from "styled-components";
import { AiOutlineDownload } from '../../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    background: ${props => props.theme.colors.background};

    flex-shrink: 0;
    max-width: 100%;
    width: 100%;

    & > h1 {
      color: ${props => props.theme.colors.textSecundary};
    }

    & > h2 {
      color: ${props => props.theme.colors.textSecundary};
      text-align: center;
      margin-top: 15px;
      font-size: 3rem;
    }

    & > hr {
      margin: 20px 0;
      width: 100%;
      background: ${props => props.theme.colors.textPrimary};
      height:0.5px;
    }


`;

export const Top = styled.div`
  display: flex;
`;

export const Photo = styled.div`

    display: flex;
    max-width: 50%;
    padding-right: 20px;
    flex-shrink: 0;

    & > img {
        object-fit: cover;
        width: 100%;
        margin-top: 40px;
        flex-shrink: 0;
    }
`;


export const Texts = styled.div`

  display: flex;
  flex-direction: column;
  max-width: 50%;


`;

export const ParagraphOne = styled.div`
  text-align: left;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.textSecundary};


  & > p:first-child {

    display: inline;
    padding-right: 30px;


    vertical-align: baseline;

    font-size: 1rem;

  }

  & > p:nth-child(2) {

      display: inline;

      max-width: 100%;
      word-wrap: break-word;
      white-space: pre-wrap;
      font-size: 1.8rem;
      font-weight: bold;


  }
`;

export const ParagraphTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textSecundary};

  & > p {

    max-width: 100%;
    word-wrap: break-word;
    white-space: pre-wrap;
`;






export const Education = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-bottom: 5px;

    & > p:nth-child(1),
    > p:nth-child(2) {
      font-weight: bold;
      color: ${props => props.theme.colors.textSecundary};
    }
`;

export const Experience = styled.div`
  font-size: 1.2rem;

  & > p:nth-child(1),
    > p:nth-child(2) {

      color: ${props => props.theme.colors.textSecundary};
    }

  & > p:nth-child(2) {
    margin-top:4px;
  }

  & > ul > li {
    color: ${props => props.theme.colors.textSecundary};
    padding-left: 10px;
    list-style-position: inside;
    margin-bottom: 2px;
  }

  & > ul > li:first-child {
    margin-top: 2px;
`;

export const CurriculumPdf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    display: flex;
    background: #1FB7FF;
    cursor: pointer;
    color: ${props => props.theme.colors.textSecundary};
    padding: 10px 30px;
    border-radius: 5px;

    &:hover {
      background: #42F9FE;
    }
  }


`;



export const DownloadIcon = styled(AiOutlineDownload)`
  color: ${props => props.theme.colors.textSecundary};
  margin-right: 6px;
`;

