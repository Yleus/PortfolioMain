import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6px;
  padding: 12px;
  background-color: #2142A6;


  & input[type="number"] {
    grid-column: 1 / -1;
    width: 100%;
    height: 50px;
    font-size: 36px;
    text-align: right;
    background-color: ${props => props.theme.colors.textSecundary};
    border: none;
    color: ${props => props.theme.colors.background};

    padding: 0 10px;
  }

  & button {
    width: 100%;
    height: 40px;
    font-size: 16px;
    background-color: ${props => props.theme.colors.textSecundary};
    border: none;

    outline: none;
    cursor: pointer;
    color: ${props => props.theme.colors.background};
    margin: 0;


    &:hover {
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.textSecundary};
    }
  }
`;
