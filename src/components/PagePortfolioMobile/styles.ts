import styled from "styled-components";
import { MdVerified, BsEyeglasses, AiFillHeart } from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (max-width: 700px) {
      display: flex;

      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgb(230, 230, 230, 0.4);
      width: 100%;
      max-width: 100%;
      height: 500px;
      border-radius: 6px;
      margin: 20px auto;
    }


`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  border-radius: 10px;

`;

export const Photo = styled.div`
  display: flex;
  align-itens: center;
  height: 40%;
  position: relative;

  & > img {
    width: 100%;

    border-radius: 6px 6px 0 0;
    object-fit: fill;



  }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  padding: 6px;


`;

export const Site = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  background: ${props => props.theme.colors.textSecundary};
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: center;

  & a {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 1.4rem;

  }

`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  & p {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary}
  }
`;

export const VerifiedIcon = styled(MdVerified)`
  color: #3897F0;
`;


export const By = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Desc = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Release = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Likes = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Visited = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Looks = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const Heart = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const VisitedIcon = styled(BsEyeglasses)`
  color: ${props => props.theme.colors.textSecundary};
  margin-right: 4px;
`;


export const HeartIcon = styled(AiFillHeart)`
  color: ${props => props.theme.colors.textSecundary};
  margin-right: 4px;
`;
