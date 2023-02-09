import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #2142A6;
  justify-content: center;
  align-items: center;
  width: 100%;


`;

export const Digits = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;



  & input[type="number"] {
      display: flex;
      flex-direction: row;
      text-align: center;




      width: 50px;
      height: 50px;
      font-size: 36px;


      background-color: ${props => props.theme.colors.textSecundary};
      border: none;
      color: ${props => props.theme.colors.background};

    }

    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;

    }
`

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  & button {
    width: 80px;
  }
`;
