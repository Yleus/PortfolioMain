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


`;

export const Components = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);


`;

export const Space = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
`;
