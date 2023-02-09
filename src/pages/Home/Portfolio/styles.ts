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
    }



`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
        margin-bottom: 10px;
    }
`;

export const AboutContent = styled.div`
    display: flex;
`;


export const Photo = styled.div`

    max-height: 800px;
    margin-right: 20px;
    flex: 1;

    >img {
        max-width: 100%;
        margin-top: 20px;
    }
`;

export const Text = styled.div`

    height: 800px;
    margin-top: 20px;
    background: pink;
    flex: 1;
`;
