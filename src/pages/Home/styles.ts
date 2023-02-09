import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 100vw; */
  background-color: blue;

  & > h1 {
      color: ${props => props.theme.colors.textSecundary};
    }

`;

export const Menu = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(32px);

    background-color: ${props => props.theme.colors.primary};

    position: relative;


    display: flex;
    justify-content: right;
    align-items: center;
    gap: 20px;
    padding-right:20px;



    > a {
        padding: 0 1px;
        color: ${props => props.theme.colors.textPrimary};
        text-decoration: none;



        cursor: pointer;
        font-size: 1.2rem;

        font-weight: bold;


        &:hover {
          color: ${props => props.theme.colors.textActive};
        }
      }

    .active {

      color: ${props => props.theme.colors.textActive};
    }
`;

