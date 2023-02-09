import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    background: ${props => props.theme.colors.background};

    flex-shrink: 0;
    max-width: 100%;

    & > h1 {
      color: ${props => props.theme.colors.textSecundary};
      margin-bottom: 10px;
    }

    & button {
      color: ${props => props.theme.colors.secundary};
      width: 100%;
      height: 30px;
      background-color: ${props => props.theme.colors.textSecundary};
      cursor: pointer;
      margin: 10px 0;
    }

`;

export const Space = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
`;

