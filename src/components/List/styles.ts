import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.secundary};

    border-radius: 14px;
`;

export const Item = styled.div`
    padding: 10px 16px;

    & + div {
        border-top: 1px solid  ${props => props.theme.colors.primary};;
    }

    &:first-child {
        padding-top: 13px;
    }

    &:last-child{
        padding-bottom: 17px;
    }



    & a {
      text-decoration: none;

      cursor: pointer;


      & h4 {
      font-size: 14px;
      color: ${props => props.theme.colors.textSecundary};
      margin-bottom: 6px;
      }

      & h5 {
        font-size: 12px;
        color: ${props => props.theme.colors.textPrimary};
      }
    }

`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 1.9rem;
`;
