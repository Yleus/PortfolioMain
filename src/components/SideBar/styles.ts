import styled from "styled-components";

export const Container = styled.div`
    display: none;



    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        width: min(399px, 100%);

        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.textSecundary};

    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 57px 24px 200px;
    margin-top: 3px;

    > div + div {
        margin-top: 15px;
    }
`;
