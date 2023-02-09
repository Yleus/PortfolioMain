import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;


  width: 100%;
  height: 900px;
  background-color: ${props => props.theme.colors.background};
  padding-top: 20px;
  padding-bottom: 80px;

  & p {
    display: block;
  }

  & h2, h3, h4 {
    color: ${props => props.theme.colors.textSecundary};
  }

  & h2 {
    font-size: 40px;
    font-weight: 200;
  }

  & h3 {
    font-size: 30px;
    font-weight: 200;
  }

  & h4 {
    font-size: 26px;
    font-weight: 200;
  }


`;

export const Image = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 100%;
height: 600px;

@media (max-width: 400px) {
  height: 300px;
}

& img {
    max-width: 70%
  }

`;
